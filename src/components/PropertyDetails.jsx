import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-6 m-4">
      <p className="text-gray-600 mb-1">
        <span className="text-gray-800">Street:</span> {property.street}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="text-gray-800">Area:</span> {property.area}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="text-gray-800">City:</span> {property.city}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="text-gray-800">State:</span> {property.state}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="text-gray-800">Bedrooms:</span> {property.noOfBedRooms}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="text-gray-800">Bathrooms:</span> {property.noOfBathRooms}
      </p>
      <p className="text-gray-600 mb-1">
        <span className={`font-bold ${property.nearbyHospital ? 'text-green-600' : 'text-red-600'}`}>
          Nearby Hospital:
        </span> {property.nearbyHospital ? 'Yes' : 'No'}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-bold">Nearby College:</span> {property.nearByCollege ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default PropertyDetails;
