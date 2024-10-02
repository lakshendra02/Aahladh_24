import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import GnyanSaiImage from "../../../Assets/Volunteers/ASAPANNAGNYANSAI.jpeg";
import SaiSnigdhaImage from "../../../Assets/Volunteers/SRISAISNIGDHA.jpg";
import TejaswiImage from "../../../Assets/Volunteers/TejaswiRayidi.jpg";

const Dance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "<strong> Round >> 1 </strong>",
    "1) Dance can be <strong> solo or duo or group </strong> and of any style.",
    "2) A performer who participates solo can not be the main part in group performance. i.e, Those who participate in both solo,duo or group.",
    "3) Performances can feature <strong> mixed groups </strong>, i.e., both male and female participants can be part of a single performance.",
    "4) Duration of dance must be below <strong> 5 minutes </strong>.",
    "5) Number of participants in a group should not exceed <strong> 5 </strong>.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));
  const danceImage = require("../../../Assets/posters/DANCE.png");
  const registrationLink = [{ link: "https://forms.gle/7fCfcLF5t55seNpcA" }];

  const organizersData = [
    {
      title: "Tejaswi Rayidi",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/tejaswi-rayidi-63a717201",
        },
      ],
      email: "201232@iiitt.ac.in",
      phoneNumber: "8125875342",
      backgroundImage: TejaswiImage,
    },
    {
      title: "K Sri Sai Snigdha",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          // icon: <AiFillInstagram size={20} />,
          // link: "instagram-profile-link",
        },
      ],
      email: "211114@iiitt.ac.in",
      phoneNumber: "8555971940",
      backgroundImage: SaiSnigdhaImage,
    },
    {
      title: "Gnyan Sai Asapanna",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/iam_gnyansai/",
        },
      ],
      email: "221209@iiitt.ac.in",
      phoneNumber: "8919537210",
      backgroundImage: GnyanSaiImage,
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
        <h3 className="volunteer-heading">Dance Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default Dance;
