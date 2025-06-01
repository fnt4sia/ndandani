import React from 'react';
import logofooter from '../assets/logofooter.jpg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#ff6500] text-white py-6 mt-auto flex flex-col items-center">
      <img src={logofooter} alt="Ndandani Footer Logo" className="h-12 w-auto mb-2 rounded-lg shadow" />
      <div className="font-bold text-xl mb-1">Ndandani</div>
      <div className="text-sm">&copy; {new Date().getFullYear()} Ndandani. All rights reserved.</div>
      <div className="flex space-x-4 mt-2">
        {/* Social or contact icons can go here */}
        <span className="text-[#ffa970]">Instagram</span>
        <span className="text-[#ffa970]">WhatsApp</span>
      </div>
    </footer>
  );
};

export default Footer;
