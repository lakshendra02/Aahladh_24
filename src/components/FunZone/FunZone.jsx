import React from "react";
import FunCards from "./FunCards";
import Glassballon from '../../Assets/Eventbg/Ballon.png'
import Ringtoss from '../../Assets/Eventbg/ringtoss.jpg'
import Unseen from '../../Assets/Eventbg/Artistry.png'
import CoinAqua from '../../Assets/Eventbg/CoinAqua.png'

const FunZone = () => {
  const eventData = [
    {
      title: "Glass Ballon",
      copy: "Click here to see more above the event",
      registrationLink: "/GlassBallon",
      backgroundImage: Glassballon,
    },
    {
      title: "Ring Toss",
      copy: "Click here to see more above the event",
      registrationLink: "/RingToss",
      backgroundImage: Ringtoss,
    },
    {
      title: "Unseen Artistry",
      copy: "Click here to see more above the event",
      registrationLink: "/BlindArt",
      backgroundImage: Unseen,
    },
    {
      title: "Water Tub",
      copy: "Click here to see more above the event",
      registrationLink: "/WaterTub",
      backgroundImage: CoinAqua,
    },
  ];
  return (
    <div className="event-data-css">
      <FunCards eventData={eventData} />
    </div>
  );
};

export default FunZone;
