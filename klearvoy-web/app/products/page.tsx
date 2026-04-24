import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Wardrobe Hardware</h3>
              <p className="text-gray-700 mb-4">High-quality wardrobe accessories with stable structure.</p>
              <div className="text-lg font-medium text-blue-600">Customized</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Board Materials</h3>
              <p className="text-gray-700 mb-4">Custom boards for multiple scenarios.</p>
              <div className="text-lg font-medium text-blue-600">Customized</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering Solutions</h3>
              <p className="text-gray-700 mb-4">Custom furniture project solution.</p>
              <div className="text-lg font-medium text-blue-600">Customized</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;