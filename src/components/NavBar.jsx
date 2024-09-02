/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguajeContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext.jsx";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { i18n } = useTranslation();
  const { toggleLanguage, language } = useLanguage();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(language); // Estado para almacenar el idioma seleccionado

  const handleToggleClick = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    toggleDarkMode();
  };

  const openLanguageModal = () => {
    setIsModalOpen(true);
  };

  const closeLanguageModal = () => {
    setIsModalOpen(false);
  };

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    toggleLanguage(newLanguage);
    setSelectedLanguage(newLanguage); // Actualiza el estado del idioma seleccionado
    closeLanguageModal();
  };

  useEffect(() => {
    const imagePaths = ["espana.png", "us.png", "br.png"];
    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  return (
    
    <nav className="bg-blue-500 dark:bg-slate-900 p-2">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-white">
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
        <div className="text-white ml-4">
          <Link
            to="/contact"
            className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out"
          >
            {t("navContact")}
          </Link>
        </div>
        <div className="ml-4">
          <button
            onClick={openLanguageModal}
            className="text-white hover:text-blue-400 focus:outline-none"
          >
            {selectedLanguage.toUpperCase()}{" "}
            {/* Usa selectedLanguage en lugar de language */}
          </button>
        </div>
        <div className="ml-4">
          <button
            onClick={handleToggleClick}
            className="text-white hover:text-blue-400 focus:outline-none"
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faSun} className="text-xl" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-xl" />
            )}
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeLanguageModal}
        contentLabel="Language Selection"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex space-y-2 mt-4 icon-container">
          <button
            onClick={() => changeLanguage("es")}
            className="flex items-center justify-start w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-400"
          >
            <img
              src="espana.png"
              alt="ES"
              className="w-6 h-6 mr-2"
            />
            ES
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className="flex items-center justify-start w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-400"
          >
            <img src="us.png" alt="EN" className="w-6 h-6 mr-2" />
            EN
          </button>
          <button
            onClick={() => changeLanguage("pt")}
            className="flex items-center justify-start w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-400"
          >
            <img src="br.png" alt="PT" className="w-6 h-6 mr-2" />
            PT
          </button>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
