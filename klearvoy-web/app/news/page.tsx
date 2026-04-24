import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest News</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-sm text-gray-500 mb-2">April 20, 2026</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Klearvoy Launches New Product Line</h3>
            <p className="text-gray-700 mb-4">
              We are excited to announce the launch of our new premium hardware collection, designed to meet the evolving needs of modern furniture manufacturers.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">Read more</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-sm text-gray-500 mb-2">March 15, 2026</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Expansion of Production Facilities</h3>
            <p className="text-gray-700 mb-4">
              Klearvoy has completed the expansion of its production facilities, doubling capacity to meet growing global demand.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;