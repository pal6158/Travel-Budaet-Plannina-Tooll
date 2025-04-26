import React, { useState } from "react";
import { Twitter, Instagram, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from "./NavBar";
import Footer from "./Footer";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need help planning your travel budget? Have questions about our platform?
            We're here to assist you every step of your journey.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">support@travelbudgetplanner.com</p>
                  <p className="text-gray-500 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (123) 987-6543</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9:00 AM - 5:00 PM ET</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Office</h3>
                  <p className="text-gray-600">123 Travel Avenue, Suite 400</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter the Subject "
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us how we can assist you..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-teal-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly will I receive a response?</h3>
              <p className="text-gray-600">We strive to respond to all inquiries within 24 hours during business days.</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer customer support on weekends?</h3>
              <p className="text-gray-600">We offer limited email support on weekends for urgent matters.</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I schedule a call with a travel advisor?</h3>
              <p className="text-gray-600">Yes! Premium members can schedule one-on-one consultations with our travel budget experts.</p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I provide feedback about the platform?</h3>
              <p className="text-gray-600">We welcome your feedback through our contact form or by emailing feedback@travelbudgetplanner.com.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactSection;