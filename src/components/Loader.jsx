import React from "react";
import "../style.css";
import smokeVideo from "../Assets/smoke.mp4";
const Loader = () => {
  return (
    <div className="loader-container">
      <video src={smokeVideo} autoPlay muted loop />
      <h1 className="loader-text">
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
      </h1>
    </div>
  );
};

export default Loader;
