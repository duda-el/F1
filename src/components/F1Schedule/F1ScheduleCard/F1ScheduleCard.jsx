import React from "react";
import "./F1ScheduleCard.css";

const F1ScheduleCard = ({ flag, title, location, date }) => {
  return (
    <div className="card">
      <h2 className="flag">{flag}</h2>
      <h3 className="title">{title}</h3>
      <h4 className="location">{location}</h4>
      <h5 className="date">{date}</h5>
    </div>
  );
};

export default F1ScheduleCard;
