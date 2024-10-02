import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import VikashImage from "../../../Assets/Volunteers/VikashBaabhu.png";
import KartheekImage from "../../../Assets/Volunteers/CHERUKURIKARTHEEK.jpg";
import YashImage from "../../../Assets/Volunteers/YASHKHAITAN.jpg";

const RecreateScene = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const aboutText = [
    "1) Each team must consist of at least <strong> 3 to 4 members </strong> for participation.",
    "2) The event organizers will assign a specific scene from a movie or short film to each team.",
    "3) You'll have a generous <strong>  3-day period </strong> to work on your project.",
    "4) The final submission should be in the form of a video, and you can share it through a drive link.",
    "5) The goal is to capture not just the visual aspects but also the <strong> emotions and themes </strong> of the chosen scene.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const danceImage = require("../../../Assets/posters/RECREATESCENE.png");
  const registrationLink = [{ link: "https://forms.gle/rZUbuKur7LPw5xrN7" }];

  const organizersData = [
    {
      title: "R Vikash Baabhu",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/_vikashbaabhu003/",
        },
      ],
      email: "201234@iiitt.ac.in",
      phoneNumber: "9487661002",
      backgroundImage: VikashImage,
    },
    {
      title: "Yash Khaitan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/yash-khaitan-061174233",
        },
      ],
      email: "211138@iiitt.ac.in",
      phoneNumber: "8449408825",
      backgroundImage: YashImage,
    },
    {
      title: "Cherukuri V L N Kartheek",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/kartheek.cherukuri/",
        },
      ],
      email: "221212@iiitt.ac.in",
      phoneNumber: "7893450614",
      backgroundImage: KartheekImage,
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
        <h3 className="volunteer-heading">Recreate The Scene Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default RecreateScene;
