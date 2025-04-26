import React from 'react';
import { Users, Target, Globe, Award, Clock } from 'lucide-react';
import Navbar from './NavBar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="bg-White-50  min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make travel planning simple, affordable, and stress-free for everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Welcome to <span className="font-semibold text-teal-600">Travel Budget Planning</span>,
                your smart travel companion for exploring the world without the financial stress.
              </p>
              <p className="text-gray-600 mb-4">
                Born from our own travel challenges, we created a platform that helps adventurers like you track expenses,
                set realistic budgets, and discover cost-friendly destinations that don't compromise on experience.
              </p>
              <p className="text-gray-600">
                Whether you're backpacking solo through Southeast Asia, planning a romantic getaway in Europe,
                or organizing a family vacation, our tools are designed to keep your finances in check while maximizing your travel experience.
              </p>
            </div>
            <div className="md:w-1/2 bg-teal-600 rounded-lg p-10">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6 italic">
                  "We believe that traveling the world should be exciting, not financially overwhelming.
                  Our mission is to empower travelers with the financial tools and insights they need to
                  explore confidently and create unforgettable memories."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <p className="ml-4 text-gray-700 font-medium">
                    Let's make travel affordable, efficient, and stress-free—together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We believe travel should be accessible to everyone, regardless of budget constraints.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We provide clear, honest financial guidance with no hidden costs or surprises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community of travelers sharing budget tips and experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="bg-teal-600 text-white rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Travel Budget Planning?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Clock size={20} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save Time & Money</h3>
                  <p className="text-blue-100">
                    Our intelligent planning tools help you create optimized travel itineraries that maximize experiences while minimizing costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Globe size={20} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
                  <p className="text-blue-100">
                    From popular tourist destinations to hidden gems, we provide budget insights for locations worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Users size={20} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
                  <p className="text-blue-100">
                    Tailored recommendations based on your travel style, preferences, and financial goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Award size={20} className="text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Trusted by Travelers</h3>
                  <p className="text-blue-100">
                    Join thousands of satisfied users who have transformed their travel experience with our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-teal-600 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to revolutionize your travel planning?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Join our community of savvy travelers and start planning your next adventure with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Get Started Free
            </button>
            <button className="bg-white hover:bg-gray-100 text-teal-600 font-bold py-3 px-8 rounded-lg border border-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;