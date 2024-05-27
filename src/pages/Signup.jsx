import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const baseUrl = 'https://rentify-backend-livid-chi.vercel.app/';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    number: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/signup`, formData);
      console.log('Signup response:', response.data);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Error processing signup. Please try again later.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Contact Number" name="number" value={formData.number} onChange={handleChange} />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
          </div>
        </form>
        {error && <div className="text-red-500 text-sm">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
