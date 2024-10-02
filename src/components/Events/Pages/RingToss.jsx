import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import SathvikaImage from "../../../Assets/FUNZONE/BSathvika.jpeg";
import RamcharanImage from "../../../Assets/FUNZONE/RAMCHARANTEJ.jpeg";
import SindujaImage from "../../../Assets/FUNZONE/SINDHUJA.jpeg";
import JayashreeImage from "../../../Assets/FUNZONE/KJAYASHREE.jpg";

const RingToss = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "<strong> Gameplay: </strong>",
    "1) Divide participants into smaller groups, with each group starting at a different station.",
    "2) Each player gets a set number of ring toss attempts before moving to the next station.",
    "3) If a player successfully lands a ring on a peg/hook, they win a prize. If not, they move to the next station after their attempts.",
    "<strong> Throwing Rules: </strong>",
    "1) <strong> Throwing Line: </strong> Stand behind the throwing line to toss rings.",
    "2) <strong> Tossing Technique: </strong> Use underhand or overhand throws.",
    "3) <strong> Gentle Toss: </strong> Toss rings gently to avoid excessive bouncing.",
    "4) <strong> One Ring: </strong> Throw one ring at a time.",
    "5) <strong> No Crossing Line: </strong> Keep feet behind the line while throwing.",
    "6) <strong> Respect Turns: </strong> Wait for your turn and cheer for others.",
    "7) <strong> Safety: </strong> Be aware of surroundings to avoid collisions.",
    "8) <strong> Positive Attitude: </strong> Have fun and stay positive.",
    "9) <strong> Fair Play: </strong> Players should throw the rings in a fair and sportsmanlike manner.",
    "10) <strong> Timeouts: </strong> Request timeouts if needed.",
    "11) <strong> No Bouncing: </strong> If a ring bounces off the target or the ground and lands on the target, it is considered invalid and does not count as a successful throw.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const singingImage = require("../../../Assets/posters/RINGTOSS.jpg");
  const registrationLink = [{ link: "" }];

  const organizersData = [
    {
      title: "Bheemanathy Sathvika",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/sathvika_chandra/",
        },
      ],
      email: "201105@iiitt.ac.in",
      phoneNumber: "9110550335",
      backgroundImage: SathvikaImage,
    },
    {
      title: "Ramcharan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/__ram._.charan/",
        },
      ],
      email: "211119@iiitt.ac.in",
      phoneNumber: "8143842289",
      backgroundImage: RamcharanImage,
    },
    {
      title: "Bathula Sindhuja",
      copy: "Volunteer",
      socialMediaIcons: [{}],
      email: "221210@iiitt.ac.in",
      phoneNumber: "7416151354",
      backgroundImage: SindujaImage,
    },
    {
      title: "K Jayashree",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "hhttps://www.linkedin.com/in/jayashree-kaveripakam-jayaprakash-b067b7279",
        },
      ],
      email: "221226@iiitt.ac.in",
      phoneNumber: "8688717048",
      backgroundImage: JayashreeImage,
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
        <h3 className="volunteer-heading">Unseen Artistry Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default RingToss;
