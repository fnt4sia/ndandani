import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bengkel from './pages/Bengkel';
import Booking from './pages/Booking';
import Mitra from './pages/Mitra';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bengkel" element={<Bengkel />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/mitra" element={<Mitra />} />
        <Route path="/about" element={<div className="p-8 text-center"><h1 className="text-2xl">About Page - Coming Soon</h1></div>} />
        <Route path="/privacy" element={<div className="p-8 text-center"><h1 className="text-2xl">Privacy Policy - Coming Soon</h1></div>} />
        <Route path="/careers" element={<div className="p-8 text-center"><h1 className="text-2xl">Careers Page - Coming Soon</h1></div>} />
        <Route path="/contact" element={<div className="p-8 text-center"><h1 className="text-2xl">Contact Page - Coming Soon</h1></div>} />
        <Route path="/terms" element={<div className="p-8 text-center"><h1 className="text-2xl">Terms of Service - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  );
};

export default App;
