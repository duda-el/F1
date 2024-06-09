import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaUser, FaCalendarAlt, FaList, FaSignOutAlt } from 'react-icons/fa';
import RaceResults from '../components/RaceResults';

const Admin = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Dashboard');
  const [userCount, setUserCount] = useState(0);

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

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('http://localhost/Backend/get_user_count.php');
        const data = await response.json();
        setUserCount(data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, []);

  return (
    <div className="flex" style={{ height: '100%', position: 'absolute', zIndex: '9999' }}>
      {/* Sidebar */}
      <div className="bg-custom-black text-white w-64 flex flex-col">
        <div className="py-6 px-6">
          <h1 className="text-3xl font-bold" style={{ fontFamily: 'formula1-bold' }}>
            User
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
          {selectedNavItem === 'Dashboard' && (
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-custom-black shadow-md rounded-lg py-4 px-10 flex flex-col">
                <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'formula1-bold' }}>
                  Total Users
                </h3>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-custom-red text-white flex items-center justify-center text-2xl">
                    <FaUsers />
                  </div>
                  <div className="ml-5">
                    <p className="text-4xl font-bold text-white" style={{ fontFamily: 'formula1' }}>
                      {userCount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedNavItem === 'Results' && <RaceResults />}
          {/* Include other tabs as needed */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
