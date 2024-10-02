import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import HayagreevImage from "../../../Assets/Volunteers/HariRamaHayagreev.jpg";
import SanjanaImage from "../../../Assets/Volunteers/ALURISANJANARAO.jpg";
import NehalImage from "../../../Assets/Volunteers/NEHALCHAURE.jpg";

const FacePainting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "1) Participants must gather in the hall <strong> 15 minutes </strong> before the event begins.",
    "2) Materials and equipment for the competition will be provided by organizers. Only those items must be used in the competition.",
    "3) Each participant must bring their painting partner.",
    "4) Competition has a time limit of <strong> 60 minutes </strong>.",
    "5) Participants will be assessed based on <strong> creativity, design and innovation</strong>.",
    "6) Decision made by judges will be final.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const danceImage = require("../../../Assets/posters/FACEPAINTING.png");
  const registrationLink = [{ link: "https://forms.gle/nqdoUKYdNHigA9n18" }];

  const organizersData = [
    {
      title: "HariRama Hayagreev",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/hari-ramahayagreev-565a72200/",
        },
      ],
      email: "201111@iiitt.ac.in",
      phoneNumber: "9666661616",
      backgroundImage: HayagreevImage,
    },
    {
      title: "Aluri Sanjana Rao",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/sanjana._.1803/",
        },
      ],
      email: "211206@iiitt.ac.in",
      phoneNumber: "9346451436",
      backgroundImage: SanjanaImage,
    },
    {
      title: "Nehal Chaure",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          // icon: <AiFillInstagram size={20} />,
          // link: "https://www.instagram.com/iam_gnyansai/",
        },
      ],
      email: "221236@iiitt.ac.in",
      phoneNumber: "9503687678",
      backgroundImage: NehalImage,
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

export default FacePainting;
