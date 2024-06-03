import React from "react";
import "./F1Schedule.css";
import F1ScheduleCard from "./F1ScheduleCard/F1ScheduleCard";

const F1Schedule = () => {
  const data = [
    { flag: "Flag1", title: "Title1", location: "Location1", date: "Date1" },
    { flag: "Flag2", title: "Title2", location: "Location2", date: "Date2" },
    { flag: "Flag3", title: "Title3", location: "Location3", date: "Date3" },
    { flag: "Flag4", title: "Title4", location: "Location4", date: "Date4" },
    { flag: "Flag4", title: "Title4", location: "Location4", date: "Date4" },
    { flag: "Flag4", title: "Title4", location: "Location4", date: "Date4" },
  ];

  return (
    <div className="card-wrapper">
      <div className="horizontalSlider">
        {data.map((item, index) => (
          <div className="card2" key={index}>
            <F1ScheduleCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default F1Schedule;
