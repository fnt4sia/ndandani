import React from 'react';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl py-16">
        {/* Image Placeholder */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* Replace 'mechanic-illustration.png' with your image */}
          <img
            src={home1}
            alt="Mechanic Service"
            className="w-72 h-72 object-contain rounded-xl shadow-lg border-4 border-[#ffa970] bg-[#fff7f0]"
          />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{ color: '#ff6500' }}
          >
            Ndandani
          </h1>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: '#ff8c40' }}
          >
            Online Bengkel Service
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Need a mechanic? Ndandani brings trusted vehicle repair services
            right to your location. Fast, reliable, and just a tap away—like
            Gojek, but for your car or motorcycle!
          </p>
          <button
            className="px-8 py-3 rounded-full text-white font-bold text-lg shadow-lg transition-colors duration-200"
            style={{
              background:
                'linear-gradient(90deg, #ff6500 0%, #ff8c40 60%, #ffa970 100%)',
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Features Section */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-[#fff7f0] rounded-xl p-6 shadow border-t-4 border-[#ff6500] flex flex-col items-center">
          {/* Replace with icon or image */}
          <div className="w-16 h-16 bg-[#ff6500] rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">
            1
          </div>
          <h3
            className="font-bold text-xl mb-2"
            style={{ color: '#ff6500' }}
          >
            Easy Booking
          </h3>
          <p className="text-gray-600 text-center">
            Book a mechanic anytime, anywhere, in just a few clicks.
          </p>
        </div>
        <div className="bg-[#fff7f0] rounded-xl p-6 shadow border-t-4 border-[#ff8c40] flex flex-col items-center">
          <div className="w-16 h-16 bg-[#ff8c40] rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">
            2
          </div>
          <h3
            className="font-bold text-xl mb-2"
            style={{ color: '#ff8c40' }}
          >
            Trusted Mechanics
          </h3>
          <p className="text-gray-600 text-center">
            All mechanics are verified and rated by customers.
          </p>
        </div>
        <div className="bg-[#fff7f0] rounded-xl p-6 shadow border-t-4 border-[#ffa970] flex flex-col items-center">
          <div className="w-16 h-16 bg-[#ffa970] rounded-full flex items-center justify-center mb-4 text-white text-3xl font-bold">
            3
          </div>
          <h3
            className="font-bold text-xl mb-2"
            style={{ color: '#ffa970' }}
          >
            On-Demand Service
          </h3>
          <p className="text-gray-600 text-center">
            Get help at your location, whenever you need it.
          </p>
        </div>
      </div>
      {/* Extra Section: Image or Banner */}
      <div className="w-full max-w-5xl flex flex-col items-center mt-20 mb-10">
        {/* Replace 'service-banner.png' with your image */}
        <img
          src={home2}
          alt="Service Banner"
          className="w-full max-w-3xl rounded-2xl shadow-lg bg-[#fff7f0] object-cover"
        />
        <p className="mt-4 text-lg text-[#ff8c40] font-semibold text-center">
          Fast, reliable, and always ready to help you on the road!
        </p>
      </div>
      {/* Footer removed, now handled by Footer component in App.jsx */}
    </div>
  );
};

export default Home;