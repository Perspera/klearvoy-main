'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const NewsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-heading text-primary mb-12">{t('news.title')}</h1>
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-smooth">
            <div className="text-sm text-accent-dark mb-3">{t('news.date1')}</div>
            <h3 className="text-2xl font-heading text-primary mb-4">{t('news.news1.title')}</h3>
            <p className="text-secondary mb-6">
              {t('news.news1.description')}
            </p>
            <a href="#" className="text-primary font-medium hover:text-accent-dark transition-smooth">{t('news.readMore')}</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-smooth">
            <div className="text-sm text-accent-dark mb-3">{t('news.date2')}</div>
            <h3 className="text-2xl font-heading text-primary mb-4">{t('news.news2.title')}</h3>
            <p className="text-secondary mb-6">
              {t('news.news2.description')}
            </p>
            <a href="#" className="text-primary font-medium hover:text-accent-dark transition-smooth">{t('news.readMore')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
