import React, { useState } from 'react';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DriverSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost/Backend/search_drivers.php',
        { searchTerm }
      );
      setDrivers(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSearchResults = () => {
    if (loading) return <div>Loading...</div>;
    if (!drivers.length) return <div>No results found</div>;

    return (
      <ul className="space-y-2">
        {drivers.map((driver) => (
          <li key={driver.id} className="flex items-center bg-gray-100 p-2 rounded-lg">
            <div className="ml-4">
              <p className="text-lg font-bold">{driver.name}</p>
              <p className="text-sm">{driver.team}</p>
              <p className="text-sm">{driver.country}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="block w-full p-2 border border-gray-300 rounded"
        placeholder="Search drivers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="absolute right-0 top-0 mt-2 mr-2" onClick={handleSearch}>
        <MagnifyingGlassIcon className="h-5 w-5  text-gray-500" />
      </button>
      {searchTerm && (
        <div className="absolute w-full bg-white shadow-lg p-4 mt-1">
          {renderSearchResults()}
        </div>
      )}
    </div>
  );
};

export default DriverSearch;
