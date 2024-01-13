/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import './styles/tailwid.css'

function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    {/* <Route path='/curriculum' element={<Home />} /> */}
    <Route path='/projects' element={<Projects />} />

  </Routes>
  )
}

export default App
