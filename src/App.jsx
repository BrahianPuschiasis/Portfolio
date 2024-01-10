/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import './index.css'

function App() {
  return (
    <Routes>
    <Route path='/curriculum' element={<Home />} />
    <Route path='/projects' element={<Projects />} />

  </Routes>
  )
}

export default App
