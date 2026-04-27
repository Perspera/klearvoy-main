'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import LazyLoad from '../components/LazyLoad';

const productCategories = [
  {
    id: 'wardrobe',
    title: '衣柜五金',
    subtitle: '结构稳定的优质配件',
    description: '完整的衣柜五金解决方案，包括拉手、铰链、滑轨等，确保衣柜的稳定性和美观性。',
    image: '/assets/images/products/wardrobe-handle-butterfly.png',
    category: 'wardrobe',
  },
  {
    id: 'board',
    title: '板材',
    subtitle: '多种场景适用定制板材',
    description: '高品质板材，适用于各种家具制造场景，提供多种规格和材质选择。',
    image: '/assets/images/products/premium-board-materials.png',
    category: 'board',
  },
  {
    id: 'engineering',
    title: '工程解决方案',
    subtitle: '定制家具项目解决方案',
    description: '为大型家具项目提供定制化的五金解决方案，满足不同工程需求。',
    image: '/assets/images/products/engineering-solution-scene.png',
    category: 'engineering',
  },
  {
    id: 'handle',
    title: '拉手和旋钮',
    subtitle: '精致美观的家具拉手',
    description: '设计精美、手感舒适的拉手和旋钮，为家具增添美感。',
    image: '/assets/images/products/wardrobe-handle-butterfly.png',
    category: 'handle',
  },
  {
    id: 'hinge',
    title: '铰链',
    subtitle: '高品质家具铰链',
    description: '精密制造的铰链，确保家具门的顺畅开启和关闭。',
    image: '/assets/images/products/premium-board-materials.png',
    category: 'hinge',
  },
  {
    id: 'slide',
    title: '滑轨',
    subtitle: '顺滑静音的抽屉滑轨',
    description: '高品质滑轨系统，提供顺滑、静音的抽屉使用体验。',
    image: '/assets/images/products/engineering-solution-scene.png',
    category: 'slide',
  },
];

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
            sizes="100vw"
            quality={90}
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
                {t('home.aboutTitle')}
              </h2>
              <p className="text-secondary leading-relaxed mb-6">
                {t('home.aboutDescription1')}
              </p>
              <p className="text-secondary leading-relaxed mb-8">
                {t('home.aboutDescription2')}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-medium tracking-wider text-primary hover:text-accent-dark transition-smooth cursor-pointer group"
              >
                {t('home.learnMore')}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <LazyLoad>
              <div className="relative h-[500px]">
                <Image
                  src="/assets/images/hero/home-banner-bg.png"
                  alt="Klearvoy Production"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Products Section - Modern Grid Showcase */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">{t('nav.products').toUpperCase()}</p>
            <h2 className="text-4xl md:text-5xl font-heading text-primary">{t('home.featuredProducts')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product) => (
              <LazyLoad key={product.id}>
                <div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-smooth duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-smooth duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading text-primary mb-2">{product.title}</h3>
                    <p className="text-accent-dark text-sm font-medium mb-3">{product.subtitle}</p>
                    <p className="text-secondary text-sm mb-4 leading-relaxed">{product.description}</p>
                    <Link
                      href={`/products?category=${product.category}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-accent-dark transition-smooth group-hover:translate-x-1"
                    >
                      {t('home.viewDetails')}
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </LazyLoad>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-block bg-primary text-white px-12 py-4 text-sm font-medium tracking-wider hover:bg-secondary transition-smooth cursor-pointer rounded-sm"
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
              <p className="text-4xl md:text-5xl font-heading mb-2">{t('home.statistics.yearsValue')}</p>
              <p className="text-sm tracking-wider text-gray-400">{t('home.statistics.years').toUpperCase()}</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-heading mb-2">{t('home.statistics.countriesValue')}</p>
              <p className="text-sm tracking-wider text-gray-400">{t('home.statistics.countries').toUpperCase()}</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-heading mb-2">{t('home.statistics.productsValue')}</p>
              <p className="text-sm tracking-wider text-gray-400">{t('home.statistics.products').toUpperCase()}</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-heading mb-2">{t('home.statistics.clientsValue')}</p>
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
