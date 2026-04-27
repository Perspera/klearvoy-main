import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data';
import { notFound } from 'next/navigation';

const ProductDetailPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">{product.name}</h1>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="relative h-[500px] bg-card-bg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-heading text-primary mb-6">{product.name}</h2>
              <p className="text-secondary leading-relaxed mb-8">{product.description}</p>
              
              {product.price && (
                <div className="mb-8">
                  <h3 className="text-lg font-heading text-primary mb-2">Price</h3>
                  <p className="text-xl font-medium text-accent-dark">{product.price}</p>
                </div>
              )}

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-heading text-primary mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-accent-dark font-medium">•</span>
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specs */}
              <div className="mb-8">
                <h3 className="text-lg font-heading text-primary mb-4">Technical Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.technicalSpecs).map(([key, value], index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-secondary font-medium">{key}:</span>
                      <span className="text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization */}
              {product.isCustomizable && (
                <div className="mb-8">
                  <div className="bg-accent/10 p-6 rounded">
                    <h3 className="text-lg font-heading text-primary mb-2">Customization Available</h3>
                    <p className="text-secondary">We can tailor this product to your specific requirements.</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-secondary transition-smooth cursor-pointer text-center"
                >
                  GET QUOTE
                </Link>
                <Link
                  href="/products"
                  className="border border-primary text-primary px-8 py-4 text-sm font-medium tracking-wider hover:bg-primary hover:text-white transition-smooth cursor-pointer text-center"
                >
                  BACK TO PRODUCTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-heading text-primary mb-12 text-center">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map(relatedProduct => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group block"
                >
                  <div className="relative h-64 overflow-hidden mb-4 bg-white">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-smooth duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-heading text-primary mb-2">{relatedProduct.name}</h3>
                  <p className="text-secondary line-clamp-2">{relatedProduct.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
