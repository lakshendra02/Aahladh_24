import React from "react";
import aahladhVideo from "../../Assets/AAHLADH_23.mp4";
import "../../style.css";
import Slider from "./Slider";
import About from "./About";
import CardContainer from "../AnimateCard/CardContainer";
import promoVideo from "../../Assets/AAHLADHPROMO.mp4";

const Aahladh = () => {
  return (
    <>
      <div className="aahladh-home-container">
        <div className="container-wrapper">
          <video
            className="aahladh-video"
            src={aahladhVideo}
            autoPlay
            muted
            loop
          ></video>
        </div>
        <About />
        <div>
          <h1 className="events-heading">Events</h1>
          <Slider />
        </div>
        <div className="promo-container">
          <video
            className="aahladh-promo"
            src={promoVideo}
            autoPlay
            controls
            loop
          ></video>
        </div>
        <div>
          <h2 className="council-mem-heading">Cultural Team</h2>
          <CardContainer />
        </div>
      </div>
    </>
  );
};

export default Aahladh;
