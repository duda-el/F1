import React from "react";
import Header from "../components/Header";
import Leclerc from "../assets/images/leclerc2.jpg";
import "./HomePage.css";
import F1Schedule from "../components/F1Schedule/F1Schedule";

export default function HomePage() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#ffff" }}>
      <Header />
      <div className="banner">
        <h1 className="mainText">
          THE CLOSEST YOU CAN <br /> GET TO FORMULA 1®
        </h1>
        <img
          src={Leclerc}
          alt="Leclerc"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div style={{width: "100%", height: "auto", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
        <h2 style={{fontFamily: "formula1-bold", fontSize: "30px"}}>2024 F1® Schedule</h2>
        <F1Schedule />
      </div>
    </div>
  );
}
