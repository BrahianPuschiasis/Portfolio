/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../context/LanguajeContext.jsx";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const { language } = useLanguage();
  const [buttonText, setButtonText] = useState(t("Enviar"));

  useEffect(() => {
    // Actualiza el texto del botón cuando cambie el idioma
    setButtonText(t("Enviar"));
  }, [language, t]);

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value;
    const userMessage = form.current.message.value;
    const finalMessage = `${userMessage}\n\n${t("contactEmail")}: ${userEmail}`;

    const templateParams = {
      from_name: "Brahian",
      user_email: userEmail,
      message: finalMessage,
    };

    setButtonText(t("Enviando"));

    emailjs
      .send(
        "service_5iw076d", // <--- serviceID
        "template_6co5hib", // <--- templateID
        templateParams, // <--- Datos a enviar
        "rr0rEFiEJh0chgDNm" // <--- publicKey
      )
      .then(
        (result) => {
          toast.success(t("MensajeSuceful"));
          setButtonText(t("Enviado"));
          form.current.reset();
        },
        (error) => {
          toast.error(t("MensajeError"));
          setButtonText(t("Enviar"));
        }
      );
  };

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
      <section className="container mx-auto my-8 flex items-center justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mb-8 p-4 bg-white dark:bg-slate-900 shadow-md rounded-md"
        >
          <input type="hidden" name="to_name" value="Brahian" />

          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            ></label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md"
              placeholder={t("IngresarNombre")}
              required
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-800 dark:text-white"
            ></label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md"
              placeholder={t("IngresarEmail")}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-800 dark:text-white"
            ></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              style={{ width: "100%" }}
              className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 shadow-md rounded-md"
              placeholder={t("IngresarMensaje")}
              required
            />
          </div>

          <div className="container mx-auto flex items-center justify-center">
            <button
              type="submit"
              disabled={buttonText === t("Enviando")}
              className={`text-x font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out  ${
                buttonText === t("Enviando")
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
