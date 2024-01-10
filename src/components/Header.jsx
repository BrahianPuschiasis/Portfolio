/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLanguage } from '../context/LanguajeContext.jsx'
import { useTranslation } from 'react-i18next';



const Header = () => {

  const { language } = useLanguage();
    const { t } = useTranslation();
  
    useEffect(() => {
    }, [language]);
  
  


  return (
    <header className="bg-blue-500 dark:bg-slate-900 text-white p-4">
      <h1 className="text-3xl font-semibold">{t('resumeTitle')}</h1>
      <p className="text-sm">{t('softwareDeveloper')}</p>
    </header>
  );
};

export default Header;
