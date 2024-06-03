import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost/Backend/signup.php',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.status === 'success') {
        // Handle successful registration
        console.log('Registration successful:', response.data.user);
        onClose(); // Close the modal after successful registration
      } else {
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-60">
      <div className="bg-custom-black p-8 rounded-lg shadow-lg w-11/12 max-w-md mx-auto relative">
        <h2 className="text-2xl mb-6 text-red-600 font-bold">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-gray-300 focus:outline-none focus:border-red-600"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="mt-2 block w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-gray-300 focus:outline-none focus:border-red-600"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              className="mt-2 block w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-gray-300 focus:outline-none focus:border-red-600"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
          >
            Register
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-300 transition duration-200"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default RegistrationModal;
