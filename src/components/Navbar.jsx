import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-[70px]">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors duration-300">
          Ndandani
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-gray-500 hover:text-orange-500 font-medium text-base transition-colors duration-300 relative group">
            Home
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/bengkel" className="text-gray-500 hover:text-orange-500 font-medium text-base transition-colors duration-300 relative group">
            Bengkel
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/mitra" className="text-gray-500 hover:text-orange-500 font-medium text-base transition-colors duration-300 relative group">
            Booking
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/mitra" className="text-gray-500 hover:text-orange-500 font-medium text-base transition-colors duration-300 relative group">
            Mitra
            <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Login Button */}
        <div className="flex items-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;