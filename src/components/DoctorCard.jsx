import React from 'react';

const DoctorCard = ({ name, specialization, experience, availability }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Specialization:</span> {specialization}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Experience:</span> {experience} years
      </p>
      <p className={`text-sm ${availability ? 'text-green-600' : 'text-red-600'}`}>
        {availability ? 'Available' : 'Not Available'}
      </p>
    </div>
  );
};

export default DoctorCard; 