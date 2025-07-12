import React from 'react';

const NewsletterSignup = () => (
  <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
      <p className="text-gray-600 mb-6">
        Get the latest posts and insights delivered to your inbox. No spam, ever.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default NewsletterSignup; 