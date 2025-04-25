import React from "react";
import { ArrowRight, Plane } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative pt-16">
      {/* Text Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Plane className="h-8 w-8 text-teal-600 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
            Travel Smarter: Budgeting Simplified
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Manage your travel expenses effortlessly with our all-in-one budgeting tool.
            Plan wisely, track efficiently, and explore with confidence,
            knowing your finances are under control.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/login">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center shadow-md hover:shadow-lg">
                Begin Your Adventure <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </button>
            </Link>
            <Link to="/demo">
              <button className="bg-white text-teal-600 border border-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center shadow-sm hover:shadow-md">
                Try Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative h-[500px] mt-8">
        <div
          className="absolute inset-0 transition-transform duration-10000 hover:scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-teal-900/20 to-black/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4 transform transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Ultimate Travel Partner
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Track, Budget, and Travel Smart — every step of the way!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 w-40">
                <h3 className="font-bold text-xl mb-2">Plan</h3>
                <p className="text-sm">Set your budget before you go</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 w-40">
                <h3 className="font-bold text-xl mb-2">Track</h3>
                <p className="text-sm">Monitor expenses in real-time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 w-40">
                <h3 className="font-bold text-xl mb-2">Save</h3>
                <p className="text-sm">Optimize your travel spending</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Platform?</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-teal-600 text-3xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold mb-2">Smart Planning</h3>
              <p className="text-gray-600">Create detailed travel budgets with intelligent suggestions based on your destination.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-teal-600 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Monitor your expenses as you travel with intuitive dashboards and visualizations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-teal-600 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Accessible</h3>
              <p className="text-gray-600">Access your travel budget from any device with our secure cloud-based platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;