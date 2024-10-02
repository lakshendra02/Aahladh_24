import React from "react";
import Animate from "./Animate";

import "./AnimateCard.css";
import profile1 from "../../Assets/CultTeam/secretary.jpg";
import profile2 from "../../Assets/CultTeam/IMG2.png";
import profile3 from '../../Assets/CultTeam/AnoopJacobThomas.jpg'

const cardData = [
  {
    name: "Dr. Anoop Jacob Thomas",
    job: "EC-CC Incharge",
    image: profile3,
    phone: "7696265939",
    email: "anoopjt@iiitt.ac.in",
    facebookUrl: "https://www.facebook.com/anoopjt",
    linkedinUrl: "https://www.linkedin.com/in/anoopjt",
  },
  {
    name: "K.Varun Chandra",
    job: "Cultural Secretary",
    image: profile1,
    phone: "9346101109",
    email: "201118@iiitt.ac.in",
    instagramUrl: "https://www.instagram.com/varun.sunny.10/",
    linkedinUrl: "https://www.linkedin.com/in/varun-chandra-809b97282",
  },
  {
    name: "Kancharla N V L Durga Mahitha",
    job: "Vice Cultural Secretary",
    image: profile2,
    phone: "9705697956",
    email: "211113@iiitt.ac.in",
    instagramUrl: "https://www.instagram.com/_mahitha__k/",
    linkedinUrl: "https://www.linkedin.com/in/mahitha-kancharla-a78637255",
  },
];

const CardContainer = () => {
  return (
    <div>
      <div className="animate-card-container">
        {cardData.map((card, index) => (
          <Animate
            key={index}
            name={card.name}
            job={card.job}
            image={card.image}
            phone={card.phone}
            email={card.email}
            facebookUrl={card.facebookUrl}
            instagramUrl={card.instagramUrl}
            linkedinUrl={card.linkedinUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
