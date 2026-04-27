'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const DownloadPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-heading text-primary mb-12">{t('download.title')}</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-heading text-primary mb-6">{t('download.productCatalogs')}</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-card-bg transition-smooth">
              <div>
                <h4 className="font-medium text-primary">{t('download.catalog1.name')}</h4>
                <p className="text-sm text-secondary">{t('download.format')}, {t('download.type.catalog')}</p>
              </div>
              <a 
                href="/assets/catalogs/new-klearvoy-catalog-2026.pdf" 
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-smooth"
                download
              >
                {t('download.download')}
              </a>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-card-bg transition-smooth">
              <div>
                <h4 className="font-medium text-primary">{t('download.catalog2.name')}</h4>
                <p className="text-sm text-secondary">{t('download.format')}, {t('download.type.catalog')}</p>
              </div>
              <a 
                href="/assets/catalogs/closet-accessories.pdf" 
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-smooth"
                download
              >
                {t('download.download')}
              </a>
            </div>
          </div>
          
          <h3 className="text-2xl font-heading text-primary mt-10 mb-6">{t('download.technicalDocuments')}</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-card-bg transition-smooth">
              <div>
                <h4 className="font-medium text-primary">{t('download.specs.name')}</h4>
                <p className="text-sm text-secondary">{t('download.format')}, 1.2MB</p>
              </div>
              <a 
                href="#" 
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-smooth"
              >
                {t('download.download')}
              </a>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-md hover:bg-card-bg transition-smooth">
              <div>
                <h4 className="font-medium text-primary">{t('download.guide.name')}</h4>
                <p className="text-sm text-secondary">{t('download.format')}, 850KB</p>
              </div>
              <a 
                href="#" 
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-secondary transition-smooth"
              >
                {t('download.download')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
