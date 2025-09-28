import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Ndandani</h2>
            <h3 className="text-xl font-semibold mb-4">
              Wherever the road takes you,<br />
              we've got your ride covered.
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Get instant mechanic help, book reliable services, and shop 
              quality spare parts — all in Ndandani.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get started
            </button>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-3">
              <Link 
                to="/booking" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Emergency Repair
              </Link>
              <Link 
                to="/booking" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Oil Service
              </Link>
              <Link 
                to="/booking" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Brake Service
              </Link>
              <Link 
                to="/booking" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Basic Tune Up
              </Link>
              <Link 
                to="/sparepart" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Spare Parts
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <div className="space-y-3">
              <Link 
                to="/about" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                About Ndandani
              </Link>
              <Link 
                to="/careers" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link 
                to="/privacy" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Mobile App Preview */}
          <div className="col-span-1 md:col-span-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-44 h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Mobile app preview placeholder */}
                  <div className="h-full flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-4 py-2 bg-gray-100 text-xs text-gray-600">
                      <span>9:41</span>
                      <span>Ndandani</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App content preview */}
                    <div className="flex-1 p-4 bg-gradient-to-b from-orange-50 to-orange-100">
                      <div className="mb-4">
                        <div className="w-8 h-8 bg-orange-500 rounded-full mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                      
                      {/* Map-like interface */}
                      <div className="bg-green-100 rounded-lg h-32 mb-4 relative">
                        <div className="absolute top-2 left-2 w-3 h-3 bg-orange-500 rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="absolute center w-4 h-4 bg-red-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      
                      {/* Service cards */}
                      <div className="space-y-2">
                        <div className="bg-orange-400 rounded-lg p-3 text-white text-xs">
                          <div className="font-semibold">Bengkel</div>
                          <div className="opacity-75">24 Hours</div>
                        </div>
                        <div className="bg-white rounded-lg p-3 text-xs border">
                          <div className="font-semibold text-gray-800">Prestop Plus</div>
                          <div className="text-gray-600">I don't spare parts</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom navigation */}
                    <div className="bg-white border-t flex justify-around py-2">
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex items-center">
          <div className="flex items-center text-gray-400 text-sm">
            <span className="mr-2">©</span>
            <span>2025 Ndandani. All right reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;