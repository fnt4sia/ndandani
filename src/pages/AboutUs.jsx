import React from 'react';
import aboutus1 from '../assets/aboutus1.png';
import aboutus2 from '../assets/aboutus2.png';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold my-8" style={{ color: '#ff6500' }}>
        About Us
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-4">
        Ndandani is an online bengkel (machine shop) platform that connects you with trusted mechanics, anytime and anywhere. Our mission is to make vehicle repair and maintenance as easy as ordering food online.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* Replace with your own team or service image if desired */}
        <img src={aboutus2} alt="Our Team" className="w-60 h-60 object-cover rounded-xl shadow border-4 border-[#ffa970] bg-[#fff7f0]" />
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#ff8c40' }}>
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Verified and experienced mechanics</li>
            <li>Fast response and on-demand service</li>
            <li>Transparent pricing and customer reviews</li>
            <li>Convenient booking from your phone</li>
          </ul>
        </div>
      </div>
      {/* Our Mission Section */}
      <div className="w-full max-w-4xl mt-16 mb-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#ffa970' }}>
            Our Mission
          </h2>
          <p className="text-gray-700 mb-2">
            We believe everyone deserves quick, reliable, and transparent vehicle repair services. Our mission is to empower vehicle owners by making professional help accessible at their fingertips, reducing downtime and stress.
          </p>
          <p className="text-gray-700">
            Whether you’re at home, at work, or on the road, Ndandani is here to connect you with the best mechanics in your area.
          </p>
        </div>
        {/* Replace with your own mission image if desired */}
        <img src={aboutus1} alt="Our Mission" className="w-60 h-60 object-cover rounded-xl shadow border-4 border-[#ff8c40] bg-[#fff7f0]" />
      </div>
      {/* How It Works Section */}
      <div className="w-full max-w-4xl mt-8 mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#ff6500' }}>
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-[#fff7f0] rounded-xl p-6 shadow border-t-4 border-[#ff6500]">
            <div className="w-14 h-14 bg-[#ff6500] rounded-full flex items-center justify-center mb-3 text-white text-2xl font-bold">1</div>
            <div className="font-bold mb-1" style={{ color: '#ff6500' }}>Book</div>
            <div className="text-gray-600 text-center">Choose your service and book a mechanic in seconds.</div>
          </div>
          <div className="flex flex-col items-center bg-[#fff7f0] rounded-xl p-6 shadow border-t-4 border-[#ff8c40]">
            <div className="w-14 h-14 bg-[#ff8c40] rounded-full flex items-center justify-center mb-3 text-white text-2xl font-bold">2</div>
            <div className="font-bold mb-1" style={{ color: '#ff8c40' }}>Track</div>
            <div className="text-gray-600 text-center">Track your mechanic’s arrival and get real-time updates.</div>
          </div>
          <div className="flex flex-col items-center bg-[#fff7f0] rounded-xl p-6 shadow border-t-4 border-[#ffa970]">
            <div className="w-14 h-14 bg-[#ffa970] rounded-full flex items-center justify-center mb-3 text-white text-2xl font-bold">3</div>
            <div className="font-bold mb-1" style={{ color: '#ffa970' }}>Relax</div>
            <div className="text-gray-600 text-center">Sit back while your vehicle is fixed at your location.</div>
          </div>
        </div>
      </div>
      {/* Footer removed, now handled by Footer component in App.jsx */}
    </div>
  );
};

export default AboutUs;