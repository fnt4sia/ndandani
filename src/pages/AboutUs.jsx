import React from 'react';
import aboutus1 from '../assets/aboutus1.png';
import aboutus2 from '../assets/aboutus2.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-2 md:px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold my-6 md:my-8 text-center" style={{ color: '#ff6500' }}>
        About Us
      </h1>
      <p className="text-base md:text-lg text-gray-700 max-w-2xl text-center mb-4">
        Ndandani is an online bengkel (machine shop) platform that connects you with trusted mechanics, anytime and anywhere. Our mission is to make vehicle repair and maintenance as easy as ordering food online.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mt-6 md:mt-8 w-full max-w-4xl">
        <img src={aboutus2} alt="Our Team" className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-xl shadow border-4 border-[#ffa970] bg-[#fff7f0] mb-4 md:mb-0" />
        <div className="flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#ff8c40' }}>
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-4 md:pl-6 text-gray-700 text-sm md:text-base">
            <li>Verified and experienced mechanics</li>
            <li>Fast response and on-demand service</li>
            <li>Transparent pricing and customer reviews</li>
            <li>Convenient booking from your phone</li>
          </ul>
        </div>
      </div>
      {/* Our Mission Section */}
      <div className="w-full max-w-4xl mt-10 md:mt-16 mb-6 md:mb-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#ffa970' }}>
            Our Mission
          </h2>
          <p className="text-gray-700 mb-2 text-sm md:text-base">
            We believe everyone deserves quick, reliable, and transparent vehicle repair services. Our mission is to empower vehicle owners by making professional help accessible at their fingertips, reducing downtime and stress.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Whether you’re at home, at work, or on the road, Ndandani is here to connect you with the best mechanics in your area.
          </p>
        </div>
        <img src={aboutus1} alt="Our Mission" className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-xl shadow border-4 border-[#ff8c40] bg-[#fff7f0] mt-4 md:mt-0" />
      </div>
      {/* How It Works Section */}
      <div className="w-full max-w-4xl mt-6 md:mt-8 mb-10 md:mb-16 px-2 md:px-0">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center" style={{ color: '#ff6500' }}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col items-center bg-[#fff7f0] rounded-xl p-4 md:p-6 shadow border-t-4 border-[#ff6500]">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#ff6500] rounded-full flex items-center justify-center mb-3 text-white text-xl md:text-2xl font-bold">1</div>
            <div className="font-bold mb-1 text-base md:text-lg" style={{ color: '#ff6500' }}>Book</div>
            <div className="text-gray-600 text-center text-sm md:text-base">Choose your service and book a mechanic in seconds.</div>
          </div>
          <div className="flex flex-col items-center bg-[#fff7f0] rounded-xl p-4 md:p-6 shadow border-t-4 border-[#ff8c40]">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#ff8c40] rounded-full flex items-center justify-center mb-3 text-white text-xl md:text-2xl font-bold">2</div>
            <div className="font-bold mb-1 text-base md:text-lg" style={{ color: '#ff8c40' }}>Track</div>
            <div className="text-gray-600 text-center text-sm md:text-base">Track your mechanic’s arrival and get real-time updates.</div>
          </div>
          <div className="flex flex-col items-center bg-[#fff7f0] rounded-xl p-4 md:p-6 shadow border-t-4 border-[#ffa970]">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#ffa970] rounded-full flex items-center justify-center mb-3 text-white text-xl md:text-2xl font-bold">3</div>
            <div className="font-bold mb-1 text-base md:text-lg" style={{ color: '#ffa970' }}>Relax</div>
            <div className="text-gray-600 text-center text-sm md:text-base">Sit back while your vehicle is fixed at your location.</div>
          </div>
        </div>
      </div>
      {/* Footer removed, now handled by Footer component in App.jsx */}
    </div>
  );
};

export default AboutUs;