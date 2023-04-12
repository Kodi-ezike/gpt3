import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3-feature">
      <div className="gradient-bar"></div>

      <div className="gpt3-feature-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
