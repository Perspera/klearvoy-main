'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-secondary hover:text-primary transition-smooth cursor-pointer uppercase tracking-wider"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? '中' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
