import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import ChaitanyaImage from "../../../Assets/Volunteers/Chaitanya.jpg";
import RaahathImage from "../../../Assets/Volunteers/SHAIKRAAHATH.jpeg";
import RohitImage from "../../../Assets/Volunteers/ROHITBELLUR.jpg";

const Singing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "<strong> Round >> 1 </strong>",
    "1) <strong> You need to sing without seeing lyrics. </strong>",
    "2) You can sing as a <strong> group or duo or solo </strong>.",
    "3) You should mix up atleast <strong> 2 songs </strong>.",
    "4) <strong> Time Limit </strong> : Around 2.5 - 3 minutes.",
    "5) <strong> Bilingual performances </strong> will have more priority.",
    "6) Engagingness and sync will be criteria for evaluation.",
    "7) Information on next round(s) will be provided once Round 1 is over.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const singingImage = require("../../../Assets/posters/music.png");
  const registrationLink = [{ link: "https://forms.gle/tbr8hRpcwVqvDGdw7" }];

  const organizersData = [
    {
      title: "K Chaitanya",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "instagram-profile-link",
        },
      ],
      email: "201120@iiitt.ac.in",
      phoneNumber: "8008484139",
      backgroundImage: ChaitanyaImage,
    },
    {
      title: "Rohit S Bellur",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/rohith_030303/",
        },
      ],
      email: "211230@iiitt.ac.in",
      phoneNumber: "6366195654",
      backgroundImage: RohitImage,
    },
    {
      title: "Shaik Raahath",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/raahath_shaik/",
        },
      ],
      email: "221245@iiitt.ac.in",
      phoneNumber: "9059243744",
      backgroundImage: RaahathImage,
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
        <h3 className="volunteer-heading">Music Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default Singing;
