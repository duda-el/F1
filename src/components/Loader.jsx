// F1TireLoader.js
import React from 'react';
import f1TireImg from '../assets/images/F1_Tire.png'; // Import your F1 tire image
import "./Loader.css"

const F1TireLoader = () => {
  return (
    <div className="loader-container">
      <img src={f1TireImg} alt="F1 tire" className="f1-tire" />
    </div>
  );
};

export default F1TireLoader;
