import React from 'react';

const CasesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Success Cases</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Project</h3>
              <p className="text-gray-700 mb-4">Complete office furniture solution for a multinational corporation.</p>
              <div className="text-sm text-gray-500">Client: Global Tech Company</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hotel Renovation</h3>
              <p className="text-gray-700 mb-4">Bespoke furniture solutions for a 5-star hotel chain.</p>
              <div className="text-sm text-gray-500">Client: Luxury Hotel Group</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesPage;