import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import DoctorCard from '../components/DoctorCard';
import EmergencyAlert from '../components/EmergencyAlert';
import ImageSlideshow from '../components/ImageSlideshow';

const HomePage = () => {
  // Sample data - In a real application, this would come from an API
  const [doctors] = useState([
    {
      name: "Dr. Sarah Johnson",
      specialization: "Cardiology",
      experience: 12,
      availability: true,
    },
    {
      name: "Dr. Michael Chen",
      specialization: "Emergency Medicine",
      experience: 8,
      availability: true,
    },
    {
      name: "Dr. Emily Williams",
      specialization: "Pediatrics",
      experience: 15,
      availability: false,
    },
  ]);

  const [emergencies] = useState([
    {
      patientId: "P001",
      condition: "Cardiac Emergency",
      location: "Emergency Room 1",
    },
    {
      patientId: "P002",
      condition: "Severe Trauma",
      location: "Emergency Room 3",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4">
        {/* Slideshow Section */}
        <div className="mb-8">
          <ImageSlideshow />
        </div>

        {/* Emergency Alerts */}
        <EmergencyAlert emergencies={emergencies} />
        
        {/* Doctors Section */}
        <h2 className="text-2xl font-bold mb-6">Available Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              specialization={doctor.specialization}
              experience={doctor.experience}
              availability={doctor.availability}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage; 