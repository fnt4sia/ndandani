import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import hero1 from '../../assets/hero1.png';
import hero2 from '../../assets/hero2.png';
import hero3 from '../../assets/hero3.png';
import hero4 from '../../assets/hero4.png';
import hero5 from '../../assets/hero5.png';
import hero6 from '../../assets/hero6.png';
import hero7 from '../../assets/hero7.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main content area - placeholder for now */}
      <main className="flex-1">

        {/* Help Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Need help with<br />
                  maintenance or repairs?
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Get professional mechanic services delivered to your location. 
                  Fast, reliable, and affordable solutions for all your vehicle needs.
                </p>
                
                {/* Location Input */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full px-4 py-3 pr-12 border border-gray-100 rounded-4xl bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg 
                        className="w-5 h-5 text-orange-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Book now
                </button>
              </div>
              
              {/* Right Image Placeholder */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-orange-600">
                    <img src={hero1} alt="Hero 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Ndandani Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
              Why choose Ndandani?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Fix it anywhere */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-48 flex items-center justify-center mb-6">
                  <div className="text-orange-600">
                    <img src={hero2} alt="Hero 2" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Fix it anywhere</h3>
                <p className="text-gray-600">
                  Book mechanic services directly from the app and 
                  get your vehicle fixed at your preferred location.
                </p>
              </div>

              {/* Find the best repair shop */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-48 flex items-center justify-center mb-6">
                  <div className="text-orange-600">
                      <img src={hero3} alt="Hero 3" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Find the best repair shop</h3>
                <p className="text-gray-600">
                  Discover top-rated repair shops in your area with 
                  verified reviews and competitive pricing.
                </p>
              </div>

              {/* Get the right parts, anytime */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-48 flex items-center justify-center mb-6">
                  <div className="text-orange-600">
                    <img src={hero4} alt="Hero 4" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Get the right parts, anytime</h3>
                <p className="text-gray-600">
                  Shop authentic spare parts with quality guarantee 
                  and fast delivery to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Request Mechanic Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Request mechanic help anytime, on any device
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Get instant access to professional mechanics through our platform, 
              available 24/7 on all your devices.
            </p>
            
            <div className="space-y-16">
              {/* Step 1 - Enter Location */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                    <div className="text-center text-orange-600">
                        <img src={hero5} alt="Hero 5" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Enter your location</h3>
                      <p className="text-gray-600">
                        Simply enter your current address or let us auto-detect your location 
                        to find the nearest available mechanics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Choose Service */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                    <div className="text-center text-orange-600">
                       <img src={hero6} alt="Hero 6" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Choose service type</h3>
                      <p className="text-gray-600">
                        Select from our range of services including Oil Service, Brake Service, 
                        or Basic Tune up to get the right help for your vehicle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 - Get Assistance */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                    <div className="text-center text-orange-600">
                      <img src={hero7} alt="Hero 7" />
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Get instant assistance</h3>
                      <p className="text-gray-600">
                        Connect with certified mechanics in your area who will provide 
                        professional service and get you back on the road quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;