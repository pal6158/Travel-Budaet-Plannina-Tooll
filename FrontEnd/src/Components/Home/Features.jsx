import React, { useState } from 'react';
import { Wallet, PieChart, Globe2, Bell, Users, BarChart3, Plane, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Features() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: <Wallet className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />,
      title: "Expense Tracking",
      description: "Log and categorize your travel expenses effortlessly with our intuitive interface."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />,
      title: "Detailed Reports",
      description: "Generate comprehensive expense reports for better financial planning."
    },
    {
      icon: <PieChart className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />,
      title: "Visual Analytics",
      description: "Get clear insights into your spending patterns with beautiful charts and graphs."
    },
    {
      icon: <Bell className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />,
      title: "Smart Alerts",
      description: "Receive notifications when approaching budget limits to stay on track."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />,
      title: "Group Budgeting",
      description: "Collaborate with travel companions to manage shared expenses easily."
    },
    {
      icon: <Globe2 className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />,
      title: "Currency Converter",
      description: "Convert expenses between currencies in real-time for accurate budgeting."
    },
  ];

  return (
    <>
      <section className="py-24 px-4 bg-gray-50" id="features">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              POWERFUL FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Everything you need for smart travel budgeting
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg border border-gray-200 hover:border-teal-600 transition-all duration-300 bg-white hover:bg-teal-600 hover:text-white shadow-sm hover:shadow-lg transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                <p className="group-hover:text-white transition-colors duration-300">{feature.description}</p>
                <div className="mt-6 flex items-center">
                  <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                    Learn more
                  </span>
                  <ChevronRight className="h-4 w-4 ml-1 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-100" id="how-it-works">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Simple steps to budget your travels
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="relative h-64 rounded-md overflow-hidden mb-6 bg-gray-200">
                  {/* Placeholder for an image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-400">Interactive Demo Image</span>
                  </div>
                </div>
                <div className="flex space-x-2 mb-6">
                  <div className="h-2 w-2 rounded-full bg-teal-600"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Create your travel budget</h3>
                <p className="text-gray-600 mb-4">
                  Set your overall budget and allocate funds to different categories like accommodation, food, transportation, and activities.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Plan your trip</h3>
                    <p className="text-gray-600">Enter your destination, dates, and estimated expenses.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Track as you go</h3>
                    <p className="text-gray-600">Log expenses in real-time during your trip, even offline.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-teal-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Analyze and learn</h3>
                    <p className="text-gray-600">Review your spending patterns and apply insights to future trips.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-24 px-4" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <Plane className="h-16 w-16 mx-auto mb-6 text-white animate-pulse" />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join a smarter platform for your travel budget planning needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup">
              <button className="bg-white text-teal-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                Get Started Now
              </button>
            </Link>
            <Link to="/demo">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-all duration-300 shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                Watch Demo
              </button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">10K+</h3>
              <p className="text-gray-200">Happy Travelers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">150+</h3>
              <p className="text-gray-200">Countries Covered</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-gray-200">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;