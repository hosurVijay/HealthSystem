import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          HealthMonitor
        </Link>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-blue-200">
            Home
          </Link>
          <Link to="/doctors" className="text-white hover:text-blue-200">
            Doctors
          </Link>
          <Link to="/emergencies" className="text-white hover:text-blue-200">
            Emergencies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 