import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logonavbar from '../assets/logonavbar.jpg'; 

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md px-4 md:px-12 py-4 flex items-center justify-between relative">
      <div className="flex items-center">
        <img src={logonavbar} alt="Ndandani Logo" className="h-12 w-auto md:h-16 rounded-lg shadow" />
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
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
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#ff6500] mb-1 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#ff6500] mb-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#ff6500] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center z-50 md:hidden animate-fade-in">
          <Link
            to="/"
            className={`w-full text-center text-lg font-medium px-4 py-3 border-b border-gray-100 ${location.pathname === '/' ? 'bg-[#ff6500] text-white' : 'text-[#ff6500] hover:bg-[#ff8c40] hover:text-white'}`}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`w-full text-center text-lg font-medium px-4 py-3 border-b border-gray-100 ${location.pathname === '/about' ? 'bg-[#ff6500] text-white' : 'text-[#ff6500] hover:bg-[#ff8c40] hover:text-white'}`}
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;