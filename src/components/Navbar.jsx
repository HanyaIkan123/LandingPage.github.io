
// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/images/Logo.png'; // Sesuaikan dengan path logo Anda

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center sticky top-0 z-50" >
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-10 mr-3" />
        <h1 className="text-white text-2xl">Artikel Lite</h1>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-200">Home</a>
        </li>
        <li>
          <a href="#articles" className="text-white hover:text-gray-300 transition-colors duration-200">Articles</a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-200">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


