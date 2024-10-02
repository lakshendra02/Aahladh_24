import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import SravanImage from "../../../Assets/FUNZONE/KSravan.jpg";
import CharanImage from "../../../Assets/FUNZONE/GCHARAN.jpg";
import RamyaImage from "../../../Assets/FUNZONE/RAMYAS.jpg";
import AsrijImage from "../../../Assets/FUNZONE/SRIRAMOJUASRIJ.jpeg";

const GlassBallon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "1) <strong> Setup: </strong> Each player is provided with a set of paper glasses and a balloon.",
    "2) <strong> Time Limit: </strong> Players have 60 seconds to construct a tower using the paper glasses.",
    "3) <strong> Construction: </strong> Players have to use the paper glasses to build their tower. The glasses should be in the shape of a pyramid.",
    "4) <strong> Stability: </strong> The tower must stand on its own without any external support or attachment to the playing surface.",
    "5) <strong> Glass knock down: </> After the tower is constructed, players must use the balloon to blow air at the tower in an attempt to knock it down.",
    "6) <strong> Knock Down Rules: </strong> Players can blow air at the tower using the balloon as many times as they want within the 60-second time limit.",
    "6)<strong> Timing: </strong> The game ends when the 60-second time limit is reached .",
    "6) <strong> Scoring: </strong> The player who successfully knocks down their tower with the balloon earns points.",
    "6) <strong> Winner: </strong>  The player with the highest score at the end of the game wins.",
    "6) <strong> Tiebreaker: </strong> In case of a tie, the players will be getting another 15 seconds to play the game.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const singingImage = require("../../../Assets/posters/GLASSBALLON.png");
  const registrationLink = [{ link: "" }];

  const organizersData = [
    {
      title: "Kosaraju Sravan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/sravan__srinivas/",
        },
      ],
      email: "201121@iiitt.ac.in",
      phoneNumber: "9182648864",
      backgroundImage: SravanImage,
    },
    {
      title: "G Charan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/mr.crxx/",
        },
      ],
      email: "211210@iiitt.ac.in",
      phoneNumber: "6301745974",
      backgroundImage: CharanImage,
    },
    {
      title: "S Ramya",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/_aymarits_/",
        },
      ],
      email: "221244@iiitt.ac.in",
      phoneNumber: "9335057091",
      backgroundImage: RamyaImage,
    },
    {
      title: "Asrij Sriramoju",
      copy: "Volunteer",
      socialMediaIcons: [{}],
      email: "221156@iiitt.ac.in",
      phoneNumber: "9390368638",
      backgroundImage: AsrijImage,
    },
  ];
  return (
    <div>
      <AboutEvent
        paragraphs={formattedAboutText}
        imageSrc={singingImage}
        registrationLinks={registrationLink}
      />
      <div>
        <h3 className="volunteer-heading">Glass and Ballon Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default GlassBallon;
