/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <Link to="/curriculum" className="text-xl font-semibold hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out">Home</Link>
          </div>
          <div className="text-white">
            <Link to="/projects" className="text-xl font-semibold ml-4 hover:text-blue-400 hover:shadow-md transition duration-300 ease-in-out">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
