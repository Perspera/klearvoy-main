'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const CasesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-heading text-primary mb-12">{t('cases.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-smooth">
            <div className="h-64 bg-card-bg"></div>
            <div className="p-6">
              <h3 className="text-xl font-heading text-primary mb-3">{t('cases.officeProject.title')}</h3>
              <p className="text-secondary mb-4">{t('cases.officeProject.description')}</p>
              <div className="text-sm text-accent-dark">{t('cases.client')}: {t('cases.officeProject.client')}</div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-smooth">
            <div className="h-64 bg-card-bg"></div>
            <div className="p-6">
              <h3 className="text-xl font-heading text-primary mb-3">{t('cases.hotelProject.title')}</h3>
              <p className="text-secondary mb-4">{t('cases.hotelProject.description')}</p>
              <div className="text-sm text-accent-dark">{t('cases.client')}: {t('cases.hotelProject.client')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesPage;
