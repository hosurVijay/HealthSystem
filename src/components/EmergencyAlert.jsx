import React from 'react';

const EmergencyAlert = ({ emergencies }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-red-700">
            Current Emergencies: {emergencies.length}
          </h3>
          <div className="mt-2 text-red-600">
            {emergencies.map((emergency, index) => (
              <div key={index} className="mb-1">
                <span className="font-medium">Patient {emergency.patientId}:</span> {emergency.condition} - 
                <span className="text-sm">{emergency.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlert; 