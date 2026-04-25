import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt="Our Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">Our Products</h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">Product Range</p>
            <h2 className="text-4xl font-heading text-primary">Premium Hardware Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="group">
              <div className="relative h-96 overflow-hidden mb-6 bg-card-bg">
                <Image
                  src="/assets/images/products/wardrobe-handle-butterfly.png"
                  alt="Premium Wardrobe Hardware"
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-3">Premium Wardrobe Hardware</h3>
              <p className="text-secondary leading-relaxed mb-4">
                High-quality wardrobe accessories with stable structure. Designed for durability and smooth operation.
              </p>
              <div className="text-sm font-medium text-accent-dark tracking-wider">CUSTOMIZED AVAILABLE</div>
            </div>
            
            {/* Product 2 */}
            <div className="group">
              <div className="relative h-96 overflow-hidden mb-6 bg-card-bg">
                <Image
                  src="/assets/images/products/premium-board-materials.png"
                  alt="Premium Board Materials"
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-3">Premium Board Materials</h3>
              <p className="text-secondary leading-relaxed mb-4">
                Custom boards for multiple scenarios. Perfect for various furniture applications with superior quality.
              </p>
              <div className="text-sm font-medium text-accent-dark tracking-wider">CUSTOMIZED AVAILABLE</div>
            </div>
            
            {/* Product 3 */}
            <div className="group">
              <div className="relative h-96 overflow-hidden mb-6 bg-card-bg">
                <Image
                  src="/assets/images/products/engineering-solution-scene.png"
                  alt="Engineering Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-3">Engineering Solutions</h3>
              <p className="text-secondary leading-relaxed mb-4">
                Custom furniture project solutions. From concept to completion, tailored to your needs.
              </p>
              <div className="text-sm font-medium text-accent-dark tracking-wider">CUSTOMIZED AVAILABLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading text-primary mb-6">Need Custom Solutions?</h2>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            We provide customized products to meet your specific project requirements
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 text-sm font-medium tracking-wider hover:bg-secondary transition-smooth cursor-pointer"
          >
            CONTACT US
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;