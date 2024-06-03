import React from "react";
import Header from "../components/Header";
import Leclerc from "../assets/images/leclerc.jpg";
import Leclerc2 from "../assets/images/leclerc2.jpg";

export default function HomePage() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "#ffff" }}>
      <Header />
      <div>
        <h1>THE CLOSEST YOU CAN GET TO FORMULA 1®</h1>
        <img
          src={Leclerc}
          alt="Leclerc"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
