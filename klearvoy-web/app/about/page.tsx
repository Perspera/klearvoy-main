import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold font-heading text-primary mb-8">About Klearvoy</h1>
        
        {/* Company Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Klearvoy is a leading manufacturer of high-quality hardware furniture, integrating R&D, design, production, and global sales. We specialize in durable, ergonomic, and cost-effective solutions for offices, hotels, schools, hospitals, and residential environments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With state-of-the-art production facilities and a strict quality control system, we ensure every product meets international standards for stability, corrosion resistance, and environmental safety.
          </p>
        </div>
        
        {/* Our Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-standard">
            <h3 className="text-xl font-semibold font-heading text-primary mb-3">Quality Assurance</h3>
            <p className="text-gray-700">
              Strict quality control system ensuring every product meets international standards.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-standard">
            <h3 className="text-xl font-semibold font-heading text-primary mb-3">Custom Solutions</h3>
            <p className="text-gray-700">
              Tailored hardware furniture solutions to meet specific project requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-standard">
            <h3 className="text-xl font-semibold font-heading text-primary mb-3">Global Support</h3>
            <p className="text-gray-700">
              Dedicated sales team providing exceptional service worldwide.
            </p>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold font-heading text-primary mb-6">Our Global Team</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/assets/images/team/global-sales-team.png"
                alt="Klearvoy Global Sales Team"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed mb-4">
                Our global sales team is dedicated to providing exceptional service and support to customers worldwide, ensuring that every project receives the attention it deserves.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With representatives in key markets around the world, we're able to provide localized support while maintaining the same high standards of quality and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;