'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Clean and Bold */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt="Klearvoy Hardware Furniture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6 leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-primary px-8 py-4 text-sm font-medium tracking-wider hover:bg-accent hover:text-white transition-smooth cursor-pointer text-center"
              >
                {t('home.exploreProducts')}
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-white hover:text-primary transition-smooth cursor-pointer text-center"
              >
                {t('home.contactUs')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Clean Split Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">{t('nav.about').toUpperCase()}</p>
              <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8 leading-tight">
                Precision in Every Detail
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                Klearvoy is a leading manufacturer of high-quality hardware furniture, integrating R&D, design, production, and global sales. We specialize in durable, ergonomic, and cost-effective solutions for offices, hotels, schools, hospitals, and residential environments.
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                With state-of-the-art production facilities and a strict quality control system, we ensure every product meets international standards for stability, corrosion resistance, and environmental safety.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium tracking-wider text-primary hover:text-accent-dark transition-smooth cursor-pointer group"
              >
                LEARN MORE ABOUT US
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/assets/images/hero/home-banner-bg.png"
                alt="Klearvoy Production"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Grid Showcase */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">{t('nav.products').toUpperCase()}</p>
            <h2 className="text-4xl md:text-5xl font-heading text-primary">{t('home.featuredProducts')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-6 bg-white">
                <Image
                  src="/assets/images/products/wardrobe-handle-butterfly.png"
                  alt="Wardrobe Hardware"
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              <h3 className="text-xl font-heading text-primary mb-2">{t('categories.wardrobe')}</h3>
              <p className="text-secondary text-sm mb-4">Premium accessories with stable structure</p>
              <Link
                href="/products"
                className="text-sm font-medium tracking-wider text-primary hover:text-accent-dark transition-smooth cursor-pointer"
              >
                VIEW DETAILS →
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-6 bg-white">
                <Image
                  src="/assets/images/products/premium-board-materials.png"
                  alt="Board Materials"
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              <h3 className="text-xl font-heading text-primary mb-2">{t('categories.board')}</h3>
              <p className="text-secondary text-sm mb-4">Custom boards for multiple scenarios</p>
              <Link
                href="/products"
                className="text-sm font-medium tracking-wider text-primary hover:text-accent-dark transition-smooth cursor-pointer"
              >
                VIEW DETAILS →
              </Link>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-6 bg-white">
                <Image
                  src="/assets/images/products/engineering-solution-scene.png"
                  alt="Engineering Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
              <h3 className="text-xl font-heading text-primary mb-2">{t('categories.engineering')}</h3>
              <p className="text-secondary text-sm mb-4">Custom furniture project solutions</p>
              <Link
                href="/products"
                className="text-sm font-medium tracking-wider text-primary hover:text-accent-dark transition-smooth cursor-pointer"
              >
                VIEW DETAILS →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border-2 border-primary text-primary px-10 py-4 text-sm font-medium tracking-wider hover:bg-primary hover:text-white transition-smooth cursor-pointer"
            >
              {t('home.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Simple & Bold */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-heading mb-2">15+</p>
              <p className="text-sm tracking-wider text-gray-400">{t('home.statistics.years').toUpperCase()}</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-heading mb-2">50+</p>
              <p className="text-sm tracking-wider text-gray-400">{t('home.statistics.countries').toUpperCase()}</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-heading mb-2">1000+</p>
              <p className="text-sm tracking-wider text-gray-400">{t('home.statistics.products').toUpperCase()}</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-heading mb-2">500+</p>
              <p className="text-sm tracking-wider text-gray-400">{t('home.statistics.clients').toUpperCase()}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            {t('home.contactCTA.title')}
          </h2>
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

export default HomePage;
