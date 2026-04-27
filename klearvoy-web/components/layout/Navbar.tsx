'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.products'), href: '/products' },
    { name: t('nav.cases'), href: '/cases' },
    { name: t('nav.news'), href: '/news' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.download'), href: '/download' },
  ];

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-heading font-semibold tracking-wider">
            KLEARVOY
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-smooth cursor-pointer tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-secondary transition-smooth cursor-pointer"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary focus:outline-none cursor-pointer"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-secondary hover:text-primary transition-smooth cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="flex-1 bg-primary text-white px-6 py-3 text-center text-sm font-medium tracking-wide hover:bg-secondary transition-smooth cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
