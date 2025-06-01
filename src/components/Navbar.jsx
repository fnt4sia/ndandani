import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logonavbar from '../assets/logonavbar.jpg'; 

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-white shadow-md">
      <img src={logonavbar} alt="Ndandani Logo" className="h-16 w-auto rounded-lg shadow" />
      <div className="flex space-x-8">
        <Link
          to="/"
          className={`text-lg font-medium px-4 py-2 rounded transition-colors duration-200 ${location.pathname === '/' ? 'bg-[#ff6500] text-white' : 'text-[#ff6500] hover:bg-[#ff8c40] hover:text-white'}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-lg font-medium px-4 py-2 rounded transition-colors duration-200 ${location.pathname === '/about' ? 'bg-[#ff6500] text-white' : 'text-[#ff6500] hover:bg-[#ff8c40] hover:text-white'}`}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;