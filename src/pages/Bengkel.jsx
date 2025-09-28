import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Bengkel = () => {
  const [searchLocation, setSearchLocation] = useState('');

  // Dummy data for bengkel
  const bengkelData = [
    {
      id: 1,
      name: 'Prestop Plus',
      rating: 4.8,
      reviews: 127,
      category: 'Complete Auto',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&h=200&fit=crop&crop=center',
      location: 'Central Area'
    },
    {
      id: 2,
      name: 'Garage 88',
      rating: 4.7,
      reviews: 93,
      category: 'Engine Point',
      image: 'https://images.unsplash.com/photo-1609650203618-1df9e7b03c80?w=300&h=200&fit=crop&crop=center',
      location: 'Downtown'
    },
    {
      id: 3,
      name: 'MotosCar Service',
      rating: 4.6,
      reviews: 156,
      category: 'Full Service',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&h=200&fit=crop&crop=center',
      location: 'East Side'
    },
    {
      id: 4,
      name: 'Prime AutoWorks',
      rating: 4.9,
      reviews: 89,
      category: 'Premium Care',
      image: 'https://images.unsplash.com/photo-1632823471565-1ecdf9b1e91e?w=300&h=200&fit=crop&crop=center',
      location: 'West District'
    },
    {
      id: 5,
      name: 'Jaksel Auto Clinic',
      rating: 4.5,
      reviews: 74,
      category: 'Repair Ready',
      image: 'https://images.unsplash.com/photo-1597149453142-d6e7e6e7e5e1?w=300&h=200&fit=crop&crop=center',
      location: 'South Jakarta'
    },
    {
      id: 6,
      name: 'DriveWell Motors',
      rating: 4.8,
      reviews: 112,
      category: 'Expert Fix',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&h=200&fit=crop&crop=center',
      location: 'North Area'
    }
  ];

  const motorcycleServices = [
    {
      id: 7,
      name: 'Speedy Motorworks',
      rating: 4.7,
      reviews: 64,
      category: 'Quick Repair',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=center',
      location: 'Central Road'
    },
    {
      id: 8,
      name: 'UrbanRide Garage',
      rating: 4.6,
      reviews: 58,
      category: 'Complete',
      image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=300&h=200&fit=crop&crop=center',
      location: 'City Center'
    },
    {
      id: 9,
      name: 'TorquePoint',
      rating: 4.8,
      reviews: 91,
      category: 'Engine Focus',
      image: 'https://images.unsplash.com/photo-1604564062810-5d7bb8d3b95b?w=300&h=200&fit=crop&crop=center',
      location: 'Highway Road'
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  const BengkelCard = ({ bengkel }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 relative">
        <img 
          src={bengkel.image} 
          alt={bengkel.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=${bengkel.name}`;
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{bengkel.name}</h3>
        {renderStars(bengkel.rating)}
        <p className="text-sm text-gray-600 mt-1">{bengkel.reviews} reviews</p>
        <div className="flex items-center mt-2">
          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
          <span className="text-sm text-gray-600">{bengkel.category}</span>
        </div>
        <div className="flex items-center mt-1">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm text-gray-600">{bengkel.location}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Find the best repair shop</h1>
            <p className="text-gray-600 mb-6">
              Explore top-rated car nearby workshops, book a service, and shop for spare parts with ease
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Enter Location"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Best car repair section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Best car repair in your area</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bengkelData.map((bengkel) => (
                <BengkelCard key={bengkel.id} bengkel={bengkel} />
              ))}
            </div>
          </div>

          {/* Motorcycle service section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Motorcycle service near you</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {motorcycleServices.map((service) => (
                <BengkelCard key={service.id} bengkel={service} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bengkel;