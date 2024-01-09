/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-white">
          <Link to="/curriculum" className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out">Home</Link>
        </div>
        <div className="text-white ml-4">
          <Link to="/projects" className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out">Projects</Link>
        </div>
        {/* Agrega más elementos según sea necesario */}
      </div>
    </nav>
  );
};

export default Navbar;
