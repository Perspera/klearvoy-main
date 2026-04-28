'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import type { Product } from '@/lib/sanity-fetch';

export default function ProductsClient({ products }: { products: Product[] }) {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const categories = [
    { key: 'wardrobe', label: isZh ? '衣柜五金' : 'Wardrobe Hardware' },
    { key: 'board', label: isZh ? '板材' : 'Board Materials' },
    { key: 'engineering', label: isZh ? '工程解决方案' : 'Engineering Solutions' },
    { key: 'handle', label: isZh ? '拉手旋钮' : 'Handles & Knobs' },
    { key: 'hinge', label: isZh ? '铰链' : 'Hinges' },
    { key: 'slide', label: isZh ? '滑轨' : 'Slides' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/hero/home-banner-bg.png"
            alt={t('products.title')}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">{t('products.title')}</h1>
        </div>
      </section>

      <section className="py-12 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                window.location.href = '/products';
              }}
              className="px-8 py-3 text-sm font-medium tracking-wider transition-smooth cursor-pointer rounded-sm bg-primary text-white shadow-md"
            >
              {t('products.allProducts')}
            </button>
            {categories.map(category => (
              <button
                key={category.key}
                onClick={() => {
                  window.location.href = `/products?category=${category.key}`;
                }}
                className="px-8 py-3 text-sm font-medium tracking-wider transition-smooth cursor-pointer rounded-sm bg-white text-primary border border-gray-300 hover:border-primary hover:bg-gray-50"
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-accent-dark mb-4 uppercase">{t('products.subtitle')}</p>
            <h2 className="text-4xl font-heading text-primary">{t('products.heading')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <Link
                key={product._id}
                href={`/products/${product.slug.current}`}
                className="group block"
              >
                <div className="relative h-80 overflow-hidden mb-6 bg-card-bg rounded-lg">
                  <Image
                    src={product.image.asset.url}
                    alt={isZh ? (product.nameZh || product.name) : product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-heading text-primary mb-2">
                  {isZh ? (product.nameZh || product.name) : product.name}
                </h3>
                <p className="text-secondary leading-relaxed mb-4">
                  {isZh ? (product.descriptionZh || product.description) : product.description}
                </p>
                {product.isCustomizable && (
                  <div className="inline-block text-sm font-medium text-accent-dark tracking-wider">
                    {t('products.customizeAvailable')}
                  </div>
                )}
              </Link>
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-secondary text-lg">{t('products.noProducts')}</p>
            </div>
          )}
        </div>
      </section>

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
}