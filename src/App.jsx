/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import './styles/output.css';
import { ThemeProvider } from './context/ThemeContext.jsx';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
