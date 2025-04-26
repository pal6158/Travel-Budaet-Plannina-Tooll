import React, { useState, useEffect, useContext } from "react";
import { DataContexAPI } from "../../contexAPI/DataContex";

const ExpenseTracker = () => {
  // Context API
  const { FetchOverData, overData, FetchTransaction } = useContext(DataContexAPI);

  // States
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedDateRange, setSelectedDateRange] = useState("Last 7 days");
  const [selectedSortBy, setSelectedSortBy] = useState("Most Recent");
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const isLogin = JSON.parse(localStorage.getItem("isLogin")) || {};

  const categories = [
    "Food",
    "Transport",
    "Bills",
    "Entertainment",
    "Accommodation",
    "Healthcare",
    "Shopping",
    "Utilities",
    "Others",
  ];

  const currencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "INR"];

  const dateRanges = [
    "Today",
    "Last 7 days",
    "Last 30 days",
    "This month",
    "Last month",
    "All time"
  ];

  // Fetch expenses on mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  // Apply filters and sorting whenever relevant states change
  useEffect(() => {
    if (expenses.length > 0) {
      applyFiltersAndSort();
    }
  }, [expenses, selectedCategory, selectedDateRange, selectedSortBy]);

  // Fetch expenses from the API
  const fetchExpenses = async () => {
    setIsLoading(true);
    setError("");

    try {
      if (!isLogin || !isLogin.accessToken) {
        throw new Error("You need to log in to view expenses");
      }

      const response = await fetch(
        "https://travelbudgettool.onrender.com/user/budgets/expenses",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch expenses");
      }

      const expensesData = await response.json();
      setExpenses(expensesData);
      setFilteredExpenses(expensesData);
    } catch (error) {
      console.error("Error fetching expenses:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Apply filters and sorting to expenses
  const applyFiltersAndSort = () => {
    let result = [...expenses];

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      result = result.filter(expense => expense.category === selectedCategory);
    }

    // Apply date range filter
    result = filterByDateRange(result, selectedDateRange);

    // Apply sorting
    result = sortExpenses(result, selectedSortBy);

    setFilteredExpenses(result);
  };

  // Filter expenses by date range
  const filterByDateRange = (expenseList, range) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const getDateFromString = (dateStr) => {
      const date = new Date(dateStr);
      date.setHours(0, 0, 0, 0);
      return date;
    };

    switch (range) {
      case "Today":
        return expenseList.filter(exp => {
          const expDate = getDateFromString(exp.date);
          return expDate.getTime() === today.getTime();
        });
      case "Last 7 days":
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 7);
        return expenseList.filter(exp => {
          const expDate = getDateFromString(exp.date);
          return expDate >= sevenDaysAgo;
        });
      case "Last 30 days":
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(today.getDate() - 30);
        return expenseList.filter(exp => {
          const expDate = getDateFromString(exp.date);
          return expDate >= thirtyDaysAgo;
        });
      case "This month":
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        return expenseList.filter(exp => {
          const expDate = getDateFromString(exp.date);
          return expDate >= firstDayOfMonth;
        });
      case "Last month":
        const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        return expenseList.filter(exp => {
          const expDate = getDateFromString(exp.date);
          return expDate >= firstDayLastMonth && expDate <= lastDayLastMonth;
        });
      case "All time":
      default:
        return expenseList;
    }
  };

  // Sort expenses based on selected sort option
  const sortExpenses = (expenseList, sortBy) => {
    switch (sortBy) {
      case "Most Recent":
        return [...expenseList].sort((a, b) => new Date(b.date) - new Date(a.date));
      case "Oldest First":
        return [...expenseList].sort((a, b) => new Date(a.date) - new Date(b.date));
      case "Highest Amount":
        return [...expenseList].sort((a, b) => b.amount - a.amount);
      case "Lowest Amount":
        return [...expenseList].sort((a, b) => a.amount - b.amount);
      default:
        return expenseList;
    }
  };

  // Format date to readable string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle adding a new expense
  const handleAddExpense = async (newExpense) => {
    try {
      setMsg("");

      if (!isLogin || !isLogin.accessToken) {
        setMsg("You need to log in to add expenses");
        return;
      }

      if (overData.totalBudget - newExpense.amount < 0) {
        setMsg("Your budget limit exceeds. Please adjust the amount.");
        return;
      }

      const expenseData = { ...newExpense };

      const createResponse = await fetch(
        "https://travelbudgettool.onrender.com/user/budgets/expenses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
          body: JSON.stringify(expenseData),
        }
      );

      if (!createResponse.ok) {
        const errorDetails = await createResponse.json();
        throw new Error(errorDetails.message || "Failed to add expense");
      }

      const savedExpense = await createResponse.json();

      // Refresh data
      FetchOverData();
      FetchTransaction();
      setExpenses(prev => [savedExpense, ...prev]);
      setShowAddExpense(false);
    } catch (error) {
      console.error("Error adding expense:", error.message);
      setMsg(error.message || "Failed to add expense. Please try again.");
    }
  };

  // Delete an expense
  const handleDeleteExpense = async (expenseId) => {
    try {
      if (!isLogin || !isLogin.accessToken) {
        setError("You need to log in to delete expenses");
        return;
      }

      const response = await fetch(
        `https://travelbudgettool.onrender.com/user/budgets/expenses/${expenseId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
        }
      );

      if (!response.ok) {
        const errorDetails = await response.json();
        throw new Error(errorDetails.message || "Failed to delete expense");
      }

      // Remove expense from state
      setExpenses(expenses.filter(expense => expense._id !== expenseId));

      // Refresh data
      FetchOverData();
      FetchTransaction();
    } catch (error) {
      console.error("Error deleting expense:", error);
      setError(error.message);
    }
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setShowAddExpense(false);
    setMsg("");
  };

  // Calculate total of filtered expenses
  const calculateFilteredTotal = () => {
    return filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2);
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Expense Tracker</h2>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}

      {/* Top actions bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <button
          onClick={() => setShowAddExpense(true)}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md shadow transition duration-200 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Expense
        </button>

        <div className="flex flex-wrap justify-end gap-2">
          <button
            onClick={fetchExpenses}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition duration-200"
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Filter and Sort Options  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="All Categories">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
          <select
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-teal-500 focus:border-teal-500"
          >
            {currencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
          <select
            value={selectedDateRange}
            onChange={(e) => setSelectedDateRange(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-teal-500 focus:border-teal-500"
          >
            {dateRanges.map((range, index) => (
              <option key={index} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
          <select
            value={selectedSortBy}
            onChange={(e) => setSelectedSortBy(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="Most Recent">Most Recent</option>
            <option value="Oldest First">Oldest First</option>
            <option value="Highest Amount">Highest Amount</option>
            <option value="Lowest Amount">Lowest Amount</option>
          </select>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">
            {selectedCategory === "All Categories"
              ? "All Expenses"
              : `${selectedCategory} Expenses`}
            {" "}({filteredExpenses.length})
          </h3>
          <div className="text-xl font-bold text-teal-600">
            {selectedCurrency} {calculateFilteredTotal()}
          </div>
        </div>
      </div>

      { /* Expense List */}
      <div className="bg-white rounded-lg shadow-sm">
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-500"></div>
          </div>
        ) : filteredExpenses.length === 0 ? (
          <div className="text-center p-8 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>No expenses found for the selected filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All Categories");
                setSelectedDateRange("All time");
              }}
              className="mt-4 text-teal-500 hover:text-teal-700"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredExpenses.map((expense, index) => (
                  <tr key={expense._id || index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{formatDate(expense.date)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${expense.category === "Food" ? "bg-green-100 text-green-800" :
                          expense.category === "Transport" ? "bg-blue-100 text-teal-800" :
                            expense.category === "Accommodation" ? "bg-purple-100 text-purple-800" :
                              expense.category === "Entertainment" ? "bg-yellow-100 text-yellow-800" :
                                "bg-gray-100 text-gray-800"
                        }`}>
                        {expense.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                      {selectedCurrency} {expense.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDeleteExpense(expense._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Expense Modal */}
      {showAddExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div
            className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Add New Expense</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {msg && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {msg}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newExpense = {
                  date: e.target.date.value,
                  description: e.target.description.value,
                  category: e.target.category.value,
                  amount: parseFloat(e.target.amount.value),
                };
                handleAddExpense(newExpense);
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="What did you spend on?"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                  required
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount ({selectedCurrency})
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="0.00"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                  step="0.01"
                  min="0.01"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md shadow transition duration-200"
                >
                  Add Expense
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;