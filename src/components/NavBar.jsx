/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguajeContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../context/ThemeContext.jsx';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { i18n } = useTranslation();
  const { toggleLanguage, language } = useLanguage();
  const { t } = useTranslation();

  const handleToggleClick = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
    toggleDarkMode();
  };

  const toggleLanguageHandler = () => {
    const newLanguage = language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
    toggleLanguage(newLanguage);
  };

  useEffect(() => {}, [language]);

  return (
    <nav className="bg-blue-500 dark:bg-slate-900 p-2">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-white ">
          <Link
            to="/"
            className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out"
          >
            {t("navHome")}
          </Link>
        </div>
        <div className="text-white ml-4">
          <Link
            to="/projects"
            className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out"
          >
            {t("navProject")}
          </Link>
        </div>
        <div className="ml-4">
          <button
            onClick={toggleLanguageHandler}
            className="text-white hover:text-blue-400 focus:outline-none"
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>
        <div className="ml-4">
          <button onClick={handleToggleClick} className="text-white hover:text-blue-400 focus:outline-none">
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} className="text-xl" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-xl" />
            )}
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
