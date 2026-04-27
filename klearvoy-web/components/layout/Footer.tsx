'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-semibold tracking-wider mb-4">KLEARVOY</h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-wider mb-6 text-gray-400">{t('footer.quickLinks').toUpperCase()}</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-accent transition-smooth cursor-pointer">{t('nav.about')}</Link></li>
              <li><Link href="/products" className="text-sm hover:text-accent transition-smooth cursor-pointer">{t('nav.products')}</Link></li>
              <li><Link href="/cases" className="text-sm hover:text-accent transition-smooth cursor-pointer">{t('nav.cases')}</Link></li>
              <li><Link href="/news" className="text-sm hover:text-accent transition-smooth cursor-pointer">{t('nav.news')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-wider mb-6 text-gray-400">{t('footer.contactInfo').toUpperCase()}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Block B, No.168, Yihe Industrial Zone</li>
              <li>Lishui Town, Nanhai District, Foshan</li>
              <li className="text-white">+86 156 9241 5580</li>
              <li>info@klearvoy.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/download" className="text-sm text-gray-400 hover:text-white transition-smooth cursor-pointer">{t('footer.downloads')}</Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-smooth cursor-pointer">{t('footer.contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
