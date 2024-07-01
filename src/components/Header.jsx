/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguajeContext.jsx";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {}, [language]);

  return (
    <header className="bg-blue-500 dark:bg-slate-900 text-white p-4 text-center">
      <h1 className="text-3xl font-semibold">Brahian Puschiasis</h1>
      <p className="text-sm">{t("softwareDeveloper")}</p>

      {/*Github */}
      <div className="flex justify-center mt-2 icon-container">
        <a
          href="https://github.com/BrahianPuschiasis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-xl hover:text-blue-300 hover:shadow-md transition duration-300 ease-in-out"
          />
        </a>

        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/brahian-puschiasis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-xl hover:text-blue-300 hover:shadow-md transition duration-300 ease-in-out"
          />
        </a>

        {/* Telefono */}
        <a href="tel:+59895591793">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-xl hover:text-blue-300 hover:shadow-md transition duration-300 ease-in-out"
          />
        </a>

        {/* Mail */}
        <a href="mailto:brahian.puschiasis@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl hover:text-blue-300 hover:shadow-md transition duration-300 ease-in-out"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
