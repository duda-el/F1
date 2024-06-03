import React from "react";
import Header from "../components/Header";
import Leclerc from "../assets/images/leclerc2.jpg";
import "./HomePage.css"

export default function HomePage() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#ffff" }}>
      <Header />
      <div className="banner">
        <h1 className="mainText">THE CLOSEST YOU CAN <br /> GET TO FORMULA 1®</h1>
        <img
          src={Leclerc}
          alt="Leclerc"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
