import React from "react";
import "./F1Schedule.css";
import F1ScheduleCard from "./F1ScheduleCard/F1ScheduleCard";

// Import flag images
import australiaFlag from "../../assets/images/flags/australia.png";
import bahrainFlag from "../../assets/images/flags/bahrain.png";
import saudiArabiaFlag from "../../assets/images/flags/saudiarAabia.png";
import japanFlag from "../../assets/images/flags/japan.png";
import chinaFlag from "../../assets/images/flags/china.png";
import usaFlag from "../../assets/images/flags/usa.png";
import italyFlag from "../../assets/images/flags/italy.png";
import monacoFlag from "../../assets/images/flags/monaco.png";
import canadaFlag from "../../assets/images/flags/canada.png";
import spainFlag from "../../assets/images/flags/spain.png";
import austriaFlag from "../../assets/images/flags/austria.png";
import ukFlag from "../../assets/images/flags/grb.png";
import hungaryFlag from "../../assets/images/flags/hugary.png";
import belgiumFlag from "../../assets/images/flags/belgium.png";
import netherlandsFlag from "../../assets/images/flags/netherlands.png";
import azerbaijanFlag from "../../assets/images/flags/azerbaijan.png";
import singaporeFlag from "../../assets/images/flags/singapore..png";
import mexicoFlag from "../../assets/images/flags/mexico.png";
import brazilFlag from "../../assets/images/flags/brazil.png";
import lasVegasFlag from "../../assets/images/flags/usa.png";
import qatarFlag from "../../assets/images/flags/qatar.png";
import uaeFlag from "../../assets/images/flags/uae.png";

const F1Schedule = () => {
  const data = [
    {
      flag: (
        <img
          src={australiaFlag}
          alt="Australia Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Australian Grand Prix",
      location: "Melbourne",
      date: "Feb 29-March 2",
      flagImg: australiaFlag,
    },
    {
      flag: (
        <img
          src={bahrainFlag}
          alt="Bahrain Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Bahrain Grand Prix",
      location: "Sakhir",
      date: "March 7-9",
      flagImg: bahrainFlag,
    },
    {
      flag: (
        <img
          src={saudiArabiaFlag}
          alt="Saudi Arabia Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Saudi Arabia Grand Prix",
      location: "Jeddah",
      date: "March 22-24",
      flagImg: saudiArabiaFlag,
    },
    {
      flag: (
        <img
          src={japanFlag}
          alt="Japan Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Japanese Grand Prix",
      location: "Suzuka",
      date: "April 5-7",
      flagImg: japanFlag,
    },
    {
      flag: (
        <img
          src={chinaFlag}
          alt="China Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Chinese Grand Prix",
      location: "Shanghai",
      date: "April 19-21",
      flagImg: chinaFlag,
    },
    {
      flag: (
        <img
          src={usaFlag}
          alt="USA Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Miami Grand Prix",
      location: "Miami",
      date: "May 3-5",
      flagImg: usaFlag,
    },
    {
      flag: (
        <img
          src={italyFlag}
          alt="Italy Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Emilia-Romagna Grand Prix",
      location: "Imola",
      date: "May 17-19",
      flagImg: italyFlag,
    },
    {
      flag: (
        <img
          src={monacoFlag}
          alt="Monaco Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Monaco Grand Prix",
      location: "Monaco",
      date: "May 24-26",
      flagImg: monacoFlag,
    },
    {
      flag: (
        <img
          src={canadaFlag}
          alt="Canada Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Canadian Grand Prix",
      location: "Montreal",
      date: "June 7-9",
      flagImg: canadaFlag,
    },
    {
      flag: (
        <img
          src={spainFlag}
          alt="Spain Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Spanish Grand Prix",
      location: "Barcelona",
      date: "June 21-23",
      flagImg: spainFlag,
    },
    {
      flag: (
        <img
          src={austriaFlag}
          alt="Austria Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Austrian Grand Prix",
      location: "Spielberg",
      date: "June 28-30",
      flagImg: austriaFlag,
    },
    {
      flag: (
        <img
          src={ukFlag}
          alt="UK Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "British Grand Prix",
      location: "Silverstone",
      date: "July 5-7",
      flagImg: ukFlag,
    },
    {
      flag: (
        <img
          src={hungaryFlag}
          alt="Hungary Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Hungarian Grand Prix",
      location: "Budapest",
      date: "July 19-21",
      flagImg: hungaryFlag,
    },
    {
      flag: (
        <img
          src={belgiumFlag}
          alt="Belgium Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Belgian Grand Prix",
      location: "Spa",
      date: "July 26-28",
      flagImg: belgiumFlag,
    },
    {
      flag: (
        <img
          src={netherlandsFlag}
          alt="Netherlands Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Dutch Grand Prix",
      location: "Zandvoort",
      date: "August 23-25",
      flagImg: netherlandsFlag,
    },
    {
      flag: (
        <img
          src={italyFlag}
          alt="Italy Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Italian Grand Prix",
      location: "Monza",
      date: "Aug 30-Sept 1",
      flagImg: italyFlag,
    },
    {
      flag: (
        <img
          src={azerbaijanFlag}
          alt="Azerbaijan Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Azerbaijan Grand Prix",
      location: "Baku",
      date: "Sept 13-15",
      flagImg: azerbaijanFlag,
    },
    {
      flag: (
        <img
          src={singaporeFlag}
          alt="Singapore Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Singapore Grand Prix",
      location: "Singapore",
      date: "Sept 22-24",
      flagImg: singaporeFlag,
    },
    {
      flag: (
        <img
          src={usaFlag}
          alt="USA Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "United States Grand Prix",
      location: "Austin",
      date: "Oct 18-20",
      flagImg: usaFlag,
    },
    {
      flag: (
        <img
          src={mexicoFlag}
          alt="Mexico Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Mexican Grand Prix",
      location: "Mexico City",
      date: "Oct 25-27",
      flagImg: mexicoFlag,
    },
    {
      flag: (
        <img
          src={brazilFlag}
          alt="Brazil Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Brazilian Grand Prix",
      location: "Sao Paulo",
      date: "Nov 1-3",
      flagImg: brazilFlag,
    },
    {
      flag: (
        <img
          src={lasVegasFlag}
          alt="Las Vegas Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Las Vegas Grand Prix",
      location: "Las Vegas",
      date: "Nov 21-23",
      flagImg: lasVegasFlag,
    },
    {
      flag: (
        <img
          src={qatarFlag}
          alt="Qatar Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Qatar Grand Prix",
      location: "Lusail",
      date: "Nov 29-Dec 1",
      flagImg: qatarFlag,
    },
    {
      flag: (
        <img
          src={uaeFlag}
          alt="UAE Flag"
          style={{ borderRadius: "5px", width: "80px", height: "50px" }}
        />
      ),
      title: "Abu Dhabi Grand Prix",
      location: "Yas Marina",
      date: "Dec 6-8",
      flagImg: uaeFlag,
    },
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
