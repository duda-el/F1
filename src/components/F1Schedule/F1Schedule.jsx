import React, { useState, useEffect } from "react";
import axios from "axios";
import "./F1Schedule.css";
import F1ScheduleCard from "./F1ScheduleCard/F1ScheduleCard";

const F1Schedule = () => {
  const [scheduleData, setScheduleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/Backend/f1_schedule.php");
        setScheduleData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="card-wrapper">
      <h2 style={{ fontFamily: "formula1-bold", fontSize: "30px", marginTop: "20px", color: "white" }}>2024 F1® Schedule</h2>
      <div className="horizontalSlider">
        {scheduleData.map((item, index) => (
          <div className="card2" key={index}>
            <F1ScheduleCard
              flag={<img src={item.flag} alt={item.title + " Flag"} style={{ borderRadius: "5px", width: "80px", height: "50px" }} />}
              title={item.title}
              location={item.location}
              date={item.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default F1Schedule;
