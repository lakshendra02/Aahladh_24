import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import VijayImage from "../../../Assets/Volunteers/VijayaPratapReddyM.jpg";
import KarthikeyanImage from "../../../Assets/Volunteers/KARTHIKEYAN.jpg";
import LehyaImage from "../../../Assets/Volunteers/SODELEHYA.jpg";
import KarthikImage from "../../../Assets/Volunteers/KathikNivedhan.jpg";

const GuessTheObject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "<strong> Round >> 1 </strong>",
    "1) Each team should comprise of <strong> 3-4 members </strong>.",
    "2) The game will comprise of total 3 rounds. 50 Teams will be divided into 4 batches the top 5 teams of each batch i.e 20 teams will qualify for the next round. Finale will be conducted for the top 5 Teams of Round 2.",
    "3) The object should be guessed within the alloted time limit with only touch and the guess should be written in a piece of paper ( seperate time will not be given for writing.",
    "4) <strong> ROUND - 1 </strong> : 5 Objects should be guessed by each team in 10 seconds of time for each object.",
    " &nbsp; &nbsp; <strong> +5 points </strong> for correct answer <strong> -1 point </strong> for every wrong guess.",
    "<strong> ROUND - 2 </strong> : 5 Objects should be guessed by each team in 15 seconds per object.",
    " &nbsp; &nbsp; <strong> +5 points </strong> for correct answer <strong> -1 point </strong> for every wrong guess.",
    "<strong> ROUND - 3 : ( FINAL ROUND ) </strong>: 3 objects should be guessed by each team in 20 seconds per object.",
    "&nbsp; &nbsp; <strong> +15 points </strong> for correct answer <strong> -5 point </strong> for every wrong guess.",
    "5) TIE BREAKER critera :total points of all <strong> 3 rounds </strong> will be taken into consideration.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const singingImage = require("../../../Assets/posters/GUESSTHEOBJECT.png");
  const registrationLink = [{ link: "https://forms.gle/4sg8sBph6R54ddSw5" }];

  const organizersData = [
    {
      title: "Vijaya Pratap Reddy M",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/vijay_prm/",
        },
      ],
      email: "201139@iiitt.ac.in",
      phoneNumber: "7019013052",
      backgroundImage: VijayImage,
    },
    {
      title: "Kathikeyan P L",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/karthikeyan_7_7/",
        },
      ],
      email: "211215@iiitt.ac.in",
      phoneNumber: "9597063722",
      backgroundImage: KarthikeyanImage,
    },
    {
      title: "Karthik Nivedhan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/kn_not_found/",
        },
      ],
      email: "221225@iiitt.ac.in",
      phoneNumber: "9940361849",
      backgroundImage: KarthikImage,
    },
    {
      title: "Sode Lehya",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          // icon: <AiFillInstagram size={20} />,
          // link: "instagram-profile-link",
        },
      ],
      email: "221248@iiitt.ac.in",
      phoneNumber: "9573459286",
      backgroundImage: LehyaImage,
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
        <h3 className="volunteer-heading">Guess The Object Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default GuessTheObject;
