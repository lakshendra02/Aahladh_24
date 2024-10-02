import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import HarshaImage from "../../../Assets/Volunteers/HARSHAMANAM.jpg";
import KalpanaImage from "../../../Assets/Volunteers/KALPANAREDDY.jpg";
import SriramImage from "../../../Assets/Volunteers/SRIRAM.png";

const DumbCharades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "<strong> Round >> 1 </strong>",
    "1) A group should consist of <strong> 4 members.</strong>.",
    "2) A player from the acting team draws a chit from the box.",
    "3) The acting player can use <strong> gestures, Body movements, Facial expressions </strong>.",
    "4) Clues like <strong> Speaking, Humming, Songs, Dumb signs </strong> are banned.",
    "5) A player can use fingers to show the number of words in the given phrase/name.",
    "6) The team has a limited time, and the time will be announced before the game starts.",
    "7) The team will earn the points if they guess the word exactly within the given time.",
    "8) The player cannot point out at any objects present in the scene.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const danceImage = require("../../../Assets/posters/DUMBCHARADES.jpg");
  const registrationLink = [{ link: "https://forms.gle/1EANJz4uGzKATWod7" }];

  const organizersData = [
    {
      title: "Juttukonda Sriram",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/juttukondasriram/",
        },
      ],
      email: "201116@iiitt.ac.in",
      phoneNumber: "9392844524",
      backgroundImage: SriramImage,
    },
    {
      title: "Harsha Vardhan Reddy",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/harsha_manam/",
        },
      ],
      email: "211112@iiitt.ac.in",
      phoneNumber: "7893930729",
      backgroundImage: HarshaImage,
    },
    {
      title: "G Sai Kalpana Reddy",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/misan_thrope18/",
        },
      ],
      email: "221252@iiitt.ac.in",
      phoneNumber: "9398606385",
      backgroundImage: KalpanaImage,
    },
  ];
  return (
    <div>
      <AboutEvent
        paragraphs={formattedAboutText}
        imageSrc={danceImage}
        registrationLinks={registrationLink}
      />{" "}
      <div>
        <h3 className="volunteer-heading">Dumb Charades Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default DumbCharades;
