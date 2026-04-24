import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Klearvoy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            Klearvoy is a leading manufacturer of high-quality hardware furniture, integrating R&D, design, production, and global sales. We specialize in durable, ergonomic, and cost-effective solutions for offices, hotels, schools, hospitals, and residential environments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            With state-of-the-art production facilities and a strict quality control system, we ensure every product meets international standards for stability, corrosion resistance, and environmental safety.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our global sales team is dedicated to providing exceptional service and support to customers worldwide, ensuring that every project receives the attention it deserves.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;