import React, { useEffect, useState } from 'react';
import { FaUsers, FaTrophy } from 'react-icons/fa';

const Telemetry = () => {
  const [telemetry, setTelemetry] = useState({
    speed: 0,
    rpm: 0,
    gear: 'N',
    tireTemp: [0, 0, 0, 0],
  });

  useEffect(() => {
    const generateTelemetryData = () => {
      setTelemetry({
        speed: Math.floor(Math.random() * 350), // Speed between 0 and 350 km/h
        rpm: Math.floor(Math.random() * 15000), // RPM between 0 and 15000
        gear: ['N', '1', '2', '3', '4', '5', '6', '7', '8'][Math.floor(Math.random() * 9)],
        tireTemp: [
          Math.floor(Math.random() * 100), // Front left tire temperature
          Math.floor(Math.random() * 100), // Front right tire temperature
          Math.floor(Math.random() * 100), // Rear left tire temperature
          Math.floor(Math.random() * 100), // Rear right tire temperature
        ],
      });
    };

    const interval = setInterval(generateTelemetryData, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-custom-black shadow-md rounded-lg py-4 px-10 mt-6 w-full">
      <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'formula1-bold' }}>
        Live Telemetry
      </h3>
      <div className="text-white grid grid-cols-2 gap-4" style={{ fontFamily: 'formula1' }}>
        <div>
          <p>Speed: {telemetry.speed} km/h</p>
          <p>RPM: {telemetry.rpm}</p>
          <p>Gear: {telemetry.gear}</p>
        </div>
        <div>
          <p>Tire Temperatures:</p>
          <ul>
            <li>Front Left: {telemetry.tireTemp[0]} °C</li>
            <li>Front Right: {telemetry.tireTemp[1]} °C</li>
            <li>Rear Left: {telemetry.tireTemp[2]} °C</li>
            <li>Rear Right: {telemetry.tireTemp[3]} °C</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [topDriver, setTopDriver] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

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

    const fetchTopDriver = async () => {
      try {
        const response = await fetch('http://localhost/Backend/get_top_driver.php');
        const data = await response.json();
        setTopDriver(data);
      } catch (error) {
        console.error('Error fetching top driver:', error);
      }
    };

    fetchUserCount();
    fetchTopDriver();

    const interval = setInterval(() => {
      fetchUserCount();
    }, 10000);

    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <>
      <div className="flex gap-6 p-2">
        {/* Real-Time Clock */}
        <div className="bg-custom-black shadow-md rounded-lg py-4 px-10 flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'formula1-bold' }}>
            Current Time
          </h3>
          <p className="text-2xl font-bold text-white" style={{ fontFamily: 'formula1' }}>
            {currentTime.toLocaleTimeString()}
          </p>
        </div>

        {/* Total Users */}
        <div className="bg-custom-black shadow-md rounded-lg py-4 px-10 flex flex-col">
          <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'formula1-bold' }}>
            Total Users
          </h3>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-custom-red text-white flex items-center justify-center text-2xl">
              <FaUsers />
            </div>
            <div className="ml-5">
              <p className="text-3xl font-bold text-white" style={{ fontFamily: 'formula1' }}>
                {userCount}
              </p>
            </div>
          </div>
        </div>

        {/* Top Driver */}
        {topDriver && (
          <div className="bg-custom-black shadow-md rounded-lg py-4 px-10 flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-white" style={{ fontFamily: 'formula1-bold' }}>
              Top Driver
            </h3>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-custom-gold bg-custom-red rounded-full text-white flex items-center justify-center text-2xl">
                <FaTrophy />
              </div>
              <div className="ml-5">
                <p className="text-md font-bold text-white" style={{ fontFamily: 'formula1' }}>
                  {topDriver.name}
                </p>
                <p className="text-md font-bold text-white" style={{ fontFamily: 'formula1' }}>
                  {topDriver.wins} Wins
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Telemetry */}
      <Telemetry />
    </>
  );
};

export default Dashboard;
