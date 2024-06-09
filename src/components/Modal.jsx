import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios"; // Ensure axios is imported

const SignInModal = ({ isOpen, onClose }) => {
  // Move hooks outside of conditional return
  const [setModali] = useState(false);
  const [isSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const signedInUser = localStorage.getItem("user");
    if (signedInUser) {
      setUser(JSON.parse(signedInUser));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isSignUp ? "Sign_up.php" : "signin.php";
      const response = await axios.post(
        `http://localhost/Backend/${endpoint}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "success") {
        if (!isSignUp) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setUser(response.data.user);
          onClose();
          window.location.reload();
        }
        setModali(false);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-9999" style={{ zIndex: 21 }}>
      <div className="bg-custom-black p-8 rounded-lg shadow-lg w-11/12 max-w-md mx-auto relative">
        <h2 className="text-2xl mb-6 text-red-600 font-bold">Sign In</h2>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Add onSubmit */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="mt-2 block w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-gray-300 focus:outline-none focus:border-red-600"
              required
              name="email"
              value={formData.email}
              onChange={handleChange} // Add onChange
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="mt-2 block w-full border border-gray-600 rounded py-2 px-4 bg-gray-800 text-gray-300 focus:outline-none focus:border-red-600"
              required
              name="password"
              value={formData.password}
              onChange={handleChange} // Add onChange
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
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
