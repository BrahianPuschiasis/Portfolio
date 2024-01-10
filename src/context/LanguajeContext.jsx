/* eslint-disable react-refresh/only-export-components */
// LanguageProvider.jsx
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import i18n from '../components/i18n.jsx'; 
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language || 'en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
