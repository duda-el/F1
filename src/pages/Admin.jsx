// Admin.jsx

import React, { useState, useEffect } from 'react';
import { FaTachometerAlt, FaUsers, FaUser, FaCalendarAlt, FaList, FaDoorOpen } from 'react-icons/fa';

const Admin = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Dashboard');
  const navItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Teams', icon: <FaUsers /> },
    { name: 'Drivers', icon: <FaUser /> },
    { name: 'Schedule', icon: <FaCalendarAlt /> },
    { name: 'Standings', icon: <FaList /> },
  ];

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  useEffect(() => {
    // Remove vertical scrollbar from the page
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';

    return () => {
      // Re-enable vertical scrollbar when component unmounts
      document.documentElement.style.overflowY = 'auto';
      document.body.style.overflowY = 'auto';
    };
  }, []);

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log('Signing out...');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-custom-black text-white w-64 flex flex-col">
        <div className="py-6 px-6">
          <h1 className="text-3xl font-bold" style={{ fontFamily: "formula1-bold" }}>User</h1>
        </div>
        <nav className="space-y-4" style={{ fontFamily: "formula1" }}>
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavItemClick(item.name)}
              className={`flex items-center justify-start py-2 px-6 uppercase cursor-pointer transition-colors ${
                selectedNavItem === item.name ? 'bg-custom-red text-white' : 'hover:bg-custom-red hover:text-gray-200'
              }`}
            >
              <span className="mr-2 text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </nav>
        {/* Sign Out Button */}
        <div className="mt-auto py-4 px-6 cursor-pointer" onClick={handleSignOut} style={{ fontFamily: "formula1" }}>
          <button className="text-md font-bold focus:outline-none flex items-center bg-custom-red text-white py-2 px-4 rounded">
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white">
        <div className="p-6">
          <h2 className="text-custom-black text-2xl font-bold capitalize">{selectedNavItem}</h2>
          {/* Render content based on selectedNavItem */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
