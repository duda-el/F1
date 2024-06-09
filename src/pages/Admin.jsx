// src/pages/Admin.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaUser, FaCalendarAlt, FaList, FaSignOutAlt } from 'react-icons/fa';
import RaceResults from '../components/RaceResults';
import Dashboard from '../components/Dashboard';

const Admin = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Results', icon: <FaUsers /> },
    { name: 'Drivers', icon: <FaUser /> },
    { name: 'Schedule', icon: <FaCalendarAlt /> },
    { name: 'Standings', icon: <FaList /> },
  ];

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };

  const handleSignOut = () => {
    console.log('Signing out...');
  };

  return (
    <div className="flex" style={{ height: '100%', position: 'absolute', zIndex: '9999' }}>
      {/* Sidebar */}
      <div className="bg-custom-black text-white w-64 flex flex-col">
        <div className="py-6 px-6">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'formula1-bold' }}>
            Admin
          </h1>
        </div>
        <nav className="space-y-4" style={{ fontFamily: 'formula1' }}>
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
        <div className="mt-auto py-4 px-6 cursor-pointer" onClick={handleSignOut} style={{ fontFamily: 'formula1' }}>
          <Link to="/" className="uppercase text-md font-bold focus:outline-none flex items-center bg-custom-red text-white py-2 px-4 rounded">
            <FaSignOutAlt className="mr-2" /> Home
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-white">
        <div className="p-6">
          {selectedNavItem === 'Dashboard' && <Dashboard />}
          {selectedNavItem === 'Results' && <RaceResults />}
          {/* Include other tabs as needed */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
