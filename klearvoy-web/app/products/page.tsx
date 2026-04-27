'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { products, ProductCategory } from './data';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const categoryKeys = ['wardrobe', 'board', 'engineering', 'handle', 'hinge', 'slide'] as const;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt={t('products.title')}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">{t('products.title')}</h1>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 text-sm font-medium tracking-wider transition-smooth cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
              }`}
            >
              {t('products.allProducts')}
            </button>
            {categoryKeys.map(key => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 text-sm font-medium tracking-wider transition-smooth cursor-pointer ${
                  selectedCategory === key
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {t(`categories.${key}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">{t('products.subtitle')}</p>
            <h2 className="text-4xl font-heading text-primary">{t('products.heading')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map(product => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group block"
              >
                <div className="relative h-96 overflow-hidden mb-6 bg-card-bg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth duration-500"
                  />
                </div>
                <h3 className="text-2xl font-heading text-primary mb-3">{product.name}</h3>
                <p className="text-secondary leading-relaxed mb-4">
                  {product.description}
                </p>
                {product.isCustomizable && (
                  <div className="text-sm font-medium text-accent-dark tracking-wider">{t('products.customizeAvailable')}</div>
                )}
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-secondary text-lg">{t('products.noProducts')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading text-primary mb-6">{t('home.contactCTA.title')}</h2>
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            {t('home.contactCTA.subtitle')}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 text-sm font-medium tracking-wider hover:bg-secondary transition-smooth cursor-pointer"
          >
            {t('home.contactCTA.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
