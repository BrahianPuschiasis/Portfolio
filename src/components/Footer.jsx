/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLanguage } from '../context/LanguajeContext.jsx'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
  }, [language]);



  return (
    <footer className="bg-blue-500 dark:bg-gray-900 text-white p-4">
    <p className="text-center">
      &copy; 2024 Brahian Puschiasis. {t('allRightsReserved')}
    </p>
  </footer>
  );
};

export default Footer;
