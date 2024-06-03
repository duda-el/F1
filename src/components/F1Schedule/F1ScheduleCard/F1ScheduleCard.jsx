import React from "react";
import "./F1ScheduleCard.css";

const F1ScheduleCard = (flag, title, location, date) => {
  return (
    <div className="card">
      <h2 className="flag">Flag</h2>
      <h3 className="title">FORMULA 1 AWS GRAND PRIX DU CANADA 2024</h3>
      <h4 className="location">MONTRÉAL, CANADA</h4>
      <h5 className="date">06-09 Jun</h5>
    </div>
  );
};
export default F1ScheduleCard;
