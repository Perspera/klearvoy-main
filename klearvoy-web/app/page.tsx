import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt="Hardware Furniture Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Precision Crafted Hardware Furniture Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Durable, functional, and aesthetic solutions for office, commercial, and residential spaces
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white hover:bg-white hover:text-gray-900 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Klearvoy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Klearvoy is a leading manufacturer of high-quality hardware furniture, integrating R&D, design, production, and global sales. We specialize in durable, ergonomic, and cost-effective solutions for offices, hotels, schools, hospitals, and residential environments.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With state-of-the-art production facilities and a strict quality control system, we ensure every product meets international standards for stability, corrosion resistance, and environmental safety.
              </p>
              <Link
                href="/about"
                className="text-blue-600 font-medium hover:underline flex items-center"
              >
                Learn more
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/assets/images/hero/home-banner-bg.png"
                  alt="Klearvoy Production Equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality hardware furniture solutions designed for various applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/assets/images/products/wardrobe-handle-butterfly.png"
                  alt="Premium Wardrobe Hardware"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Wardrobe Hardware</h3>
                <p className="text-gray-700 mb-4">High-quality wardrobe accessories with stable structure.</p>
                <Link
                  href="/products"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View details
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/assets/images/products/premium-board-materials.png"
                  alt="Premium Board Materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Board Materials</h3>
                <p className="text-gray-700 mb-4">Custom boards for multiple scenarios.</p>
                <Link
                  href="/products"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View details
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/assets/images/products/engineering-solution-scene.png"
                  alt="Engineering Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Engineering Solutions</h3>
                <p className="text-gray-700 mb-4">Custom furniture project solution.</p>
                <Link
                  href="/products"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your hardware furniture needs and get a personalized solution
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;