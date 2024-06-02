import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; 

const SignInModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-60">
      <div className="bg-custom-black p-8 rounded-lg shadow-lg w-11/12 max-w-md mx-auto relative">
        <h2 className="text-2xl mb-6 text-red-600 font-bold">Sign In</h2>
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="mt-2 block w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-gray-300 focus:outline-none focus:border-red-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              className="mt-2 block w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-gray-300 focus:outline-none focus:border-red-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-300 transition duration-200"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" /> {/* Adding the X icon */}
        </button>
      </div>
    </div>
  );
};

export default SignInModal;