/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { useLanguage } from '../context/LanguajeContext.jsx';

const Navbar = () => {
  const { i18n } = useTranslation();
  const { toggleLanguage, language } = useLanguage(); 

  const toggleLanguageHandler = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    toggleLanguage(newLanguage); 
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-white">
          <Link to="/curriculum" className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out">Home</Link>
        </div>
        <div className="text-white ml-4">
          <Link to="/projects" className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out">Projects</Link>
        </div>
        <div className="ml-4">
          <button onClick={toggleLanguageHandler} className="text-white hover:text-blue-400 focus:outline-none">
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
