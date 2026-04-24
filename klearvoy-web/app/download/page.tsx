import React from 'react';

const DownloadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Download Center</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Catalogs</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50">
              <div>
                <h4 className="font-medium text-gray-900">Klearvoy Catalog 2026</h4>
                <p className="text-sm text-gray-500">PDF, Catalog</p>
              </div>
              <a href="/assets/catalogs/new-klearvoy-catalog-2026.pdf" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700" download>Download</a>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50">
              <div>
                <h4 className="font-medium text-gray-900">Closet Accessories Catalog</h4>
                <p className="text-sm text-gray-500">PDF, Catalog</p>
              </div>
              <a href="/assets/catalogs/closet-accessories.pdf" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700" download>Download</a>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Technical Documents</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50">
              <div>
                <h4 className="font-medium text-gray-900">Product Specifications</h4>
                <p className="text-sm text-gray-500">PDF, 1.2MB</p>
              </div>
              <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Download</a>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50">
              <div>
                <h4 className="font-medium text-gray-900">Installation Guide</h4>
                <p className="text-sm text-gray-500">PDF, 850KB</p>
              </div>
              <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;