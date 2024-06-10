import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DriverCard = () => {
  const { id } = useParams();
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    console.log("Driver ID from URL:", id); // Check if the ID is correctly extracted

    const fetchDriverData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/Backend/driver_card.php?id=${id}`
        );
        console.log("Driver data fetched:", response.data); // Check the response data
        setDriver(response.data);
      } catch (error) {
        console.error("Error fetching driver data:", error);
      }
    };

    fetchDriverData();
  }, [id]);

  if (!driver) return <div>Loading...</div>;

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-lg max-w-6xl mx-auto mt-6">
      <div className="flex-1 bg-maroon flex justify-center items-center relative">
        <img
          src={driver.img}
          alt={driver.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 p-6 bg-white">
        <div className="mb-4 flex items-center">
          <h1 className="text-4xl font-bold text-gray-700 mr-2">
            {driver.driver_number}
          </h1>
          <img
            src={driver.country_flag}
            alt={driver.country}
            className="w-8 h-5 mr-2"
          />
          <h2 className="text-3xl font-bold">{driver.name}</h2>
        </div>
        <ul className="text-lg">
          <li className="mb-2">
            <strong>Team:</strong> {driver.team}
          </li>
          <li className="mb-2">
            <strong>Country:</strong> {driver.country}
          </li>
          <li className="mb-2">
            <strong>Date of Birth:</strong> {driver.date_of_birth}
          </li>
          <li className="mb-2">
            <strong>Wins:</strong> {driver.wins}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DriverCard;
