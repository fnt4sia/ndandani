import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Booking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to mitra page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/mitra');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleRedirectNow = () => {
    navigate('/mitra');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-12 rounded-2xl">
            <div className="text-6xl mb-6">🔧</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Booking Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our booking service is currently being developed to provide you with the best experience. 
              In the meantime, you can register as a workshop partner to join our network!
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Interested in Partnering with Us?
              </h2>
              <p className="text-gray-600 mb-6">
                If you're a workshop owner looking to expand your business, 
                join our Mitra program and connect with thousands of customers.
              </p>
              <button 
                onClick={handleRedirectNow}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
              >
                Learn About Mitra Program
              </button>
            </div>

            <div className="text-sm text-gray-500">
              You will be automatically redirected to the Mitra page in a few seconds...
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Booking;