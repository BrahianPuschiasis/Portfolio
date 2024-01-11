/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Recupera la preferencia almacenada en localStorage al cargar la página
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark';
  });

  const toggleDarkMode = () => {
    // Cambia el estado de isDarkMode y actualiza la clase en el documento
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  // Al cargar la página, aplica la preferencia de tema almacenada en localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
