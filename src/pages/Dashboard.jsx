import React, { useEffect, useState } from 'react';
import PropertyDetails from '../components/PropertyDetails';
import axios from 'axios';

const baseUrl = 'https://rentify-backend-livid-chi.vercel.app/';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    
    axios.get(`${baseUrl}/allproperties`)
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='flex justify-center text-2xl font-semibold p-6'>All Properties</h1>
      <div className="flex flex-wrap">
      {properties.map((property, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
          <PropertyDetails property={property} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Dashboard;
