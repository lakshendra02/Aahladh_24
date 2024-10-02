import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import ReshmaImage from "../../../Assets/Volunteers/KunaReshma.jpg";
import KarthikImage from "../../../Assets/Volunteers/GorantlaKarthik.jpg";
import AswinImage from "../../../Assets/Volunteers/ASWINREDDY.jpg";
import SrinidhiImage from "../../../Assets/Volunteers/SRINIDHI.jpeg";
import TagoreImage from "../../../Assets/Volunteers/GUGULOTHTAGORE.jpg";
import SourojitImage from "../../../Assets/Volunteers/SOUROJIT.jpg";
import NandiniImage from "../../../Assets/Volunteers/NANDINISONEKAR.jpeg";

const TreasureHunt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "<strong> Team size : 4 members </strong>",
    "1) Treasure Hunt Event is basically multiple groups competing against each other to find the final <strong> treasure </strong> in a stipulated time frame across multiple locations on campus and it is a single round event, so give it your best. ",
    "2) The event starts with handing out clues to all the teams which consists of cryptic information about the next clue’s location and so on… the number of hints needed to reach the treasure will be informed later along with the details about location limits.",
    "3) To make it more interesting not all the teams would be finding the same treasure but there will be different treasures(based on the number of teams), which means different clues as well, <strong> All the teams will be divided into certain categories(ex: A, B.. so on) where the teams of each category will be competing for the same treasure </strong>.",
    "4) If you happen to find any clue, which is not your category in the process of finding your own, kindly place it back where you took it from as it may affect the teams of other categories.",
    "5) The elimination happens automatically in the process of finding the next clue as there are not as many clues as the number of teams, so be quick!.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));
  const danceImage = require("../../../Assets/posters/TREASUREHUNT.png");
  const registrationLink = [{ link: "https://forms.gle/WGzWL2EnLCQXqpKUA" }];

  const organizersData = [
    {
      title: "Kuna Reshma",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/kuna-reshma-07b771239",
        },
      ],
      email: "201217@iiitt.ac.in",
      phoneNumber: "7013877642",
      backgroundImage: ReshmaImage,
    },
    {
      title: "Gorantla Karthik",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/karthik.gorantla.789/",
        },
      ],
      email: "201109@iiitt.ac.in",
      phoneNumber: "7095892671",
      backgroundImage: KarthikImage,
    },
    {
      title: "M Aswin Reddy",
      copy: "Volunteer",
      socialMediaIcons: [{}],
      email: "211121@iiitt.ac.in",
      phoneNumber: "8688524009",
      backgroundImage: AswinImage,
    },
    {
      title: "K Lakshmi Srinidhi",
      copy: "Volunteer",
      socialMediaIcons: [{}],
      email: "211117@iiitt.ac.in",
      phoneNumber: "8341965169",
      backgroundImage: SrinidhiImage,
    },
    {
      title: "G Tagore",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/tagoreguguloth/",
        },
      ],
      email: "221218@iiitt.ac.in",
      phoneNumber: "9381437406",
      backgroundImage: TagoreImage,
    },
    {
      title: "Sourojit Banerjee",
      copy: "Volunteer",
      socialMediaIcons: [{}],
      email: "221249@iiitt.ac.in",
      phoneNumber: "9748222341",
      backgroundImage: SourojitImage,
    },
    {
      title: "Nandini Sonekar",
      copy: "Volunteer",
      socialMediaIcons: [{}],
      email: "221138@iiitt.ac.in",
      phoneNumber: "8080865008",
      backgroundImage: NandiniImage,
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
        <h3 className="volunteer-heading">Treasure Hunt Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default TreasureHunt;
