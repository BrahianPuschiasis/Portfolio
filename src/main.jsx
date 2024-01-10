/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Navbar from './components/NavBar.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Home from './pages/Home.jsx'
import i18n from './components/i18n.jsx'
import { LanguageProvider } from './context/LanguajeContext.jsx';

library.add(fab);



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <LanguageProvider i18n={i18n}>
      <Header />
      <Navbar />
    <App />
    <Footer />
    </LanguageProvider>

  </BrowserRouter>
)
