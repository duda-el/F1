import React, { useState, useEffect } from 'react';

const DriverRanking = () => {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriverId, setSelectedDriverId] = useState('');

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = () => {
    fetch('http://localhost/Backend/get_drivers_for_vote.php')
      .then(response => response.json())
      .then(data => setDrivers(data))
      .catch(error => console.error('Error fetching drivers:', error));
  };

  const handleVote = () => {
    console.log('Vote button clicked, selectedDriverId:', selectedDriverId);

    if (selectedDriverId) {
      fetch('http://localhost/Backend/vote.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ driver_id: selectedDriverId }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response from vote_driver.php:', data);
          if (data.success) {
            fetchDrivers(); // Refetch drivers to update the leaderboard
            setSelectedDriverId('');
          } else {
            alert(data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  const getMostVotedDrivers = () => {
    const sortedDrivers = [...drivers].sort((a, b) => b.vote_count - a.vote_count);
    return sortedDrivers.slice(0, 3); // Display top 3 most voted drivers
  };

  const selectedDriver = drivers.find(driver => driver.driver_id === parseInt(selectedDriverId));

  return (
    <div className="bg-white p-4 shadow-lg">
      <div className="flex items-center mb-4">
        <label htmlFor="driver-select" className="block text-custom-black text-lg font-bold mr-10" style={{ fontFamily: 'formula1-bold' }}>Select a Driver</label>
        <select
          id="driver-select"
          className="block w-3/4 p-2 border border-gray-300 rounded mr-4"
          value={selectedDriverId}
          onChange={(e) => setSelectedDriverId(e.target.value)}
        >
          <option value="">Please choose a driver</option>
          {drivers.map((driver) => (
            <option key={driver.driver_id} value={driver.driver_id}>
              {driver.name}
            </option>
          ))}
        </select>
        <button
          className="bg-custom-red text-white py-2 px-10 rounded ml-10"
          onClick={handleVote}
          disabled={!selectedDriverId}
          style={{ fontFamily: 'formula1-bold' }}
        >
          Vote
        </button>
      </div>
      {selectedDriver && (
        <div className="flex items-center bg-custom-black p-4 rounded-lg mb-4">
          <img src={selectedDriver.img} alt={selectedDriver.name} className="h-16 w-16 rounded-full" />
          <span className="ml-4 text-xl text-white flex-grow">
            {selectedDriver.name} <img src={selectedDriver.country_flag} alt="flag" className="inline h-6 w-6 rounded-lg" />
          </span>
        </div>
      )}
      <h2 className="text-2xl text-custom-red font-bold mb-4 mt-7" style={{ fontFamily: 'formula1-bold' }}>Most Voted Drivers</h2>
      <ul className="space-y-2">
        {getMostVotedDrivers().map((driver) => (
          <li key={driver.driver_id} className="flex items-center bg-custom-black p-2 rounded-lg" style={{ fontFamily: 'formula1' }}>
            <img src={driver.img} alt={driver.name} className="h-12 w-12 rounded" />
            <span className="ml-4 text-lg text-white flex-grow">
              {driver.name} <img src={driver.country_flag} alt="flag" className="inline h-4 w-7 rounded-sm ml-2" />
            </span>
            <span className="text-lg text-white" >{driver.vote_count} votes</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverRanking;
