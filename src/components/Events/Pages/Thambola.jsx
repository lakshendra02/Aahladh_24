import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import HimanshuImage from "../../../Assets/Volunteers/Himanshu.jpg";
import SamuelImage from "../../../Assets/Volunteers/SAMUELNADAR.jpg";
import BrundhaImage from "../../../Assets/Volunteers/BRUNDHASAI.webp";

const Thambola = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "<strong> Round >> 1 </strong>",
    "1) Each player will be given a <strong> tombola ticket and a pen. </strong>",
    "2) The numbers from <strong> 1 to 90 </strong>will be displayed randomly through a projector.",
    "3) If the number displayed is present in your ticket, then strike off the number in the ticket.",
    '4) The <strong> player who strikes all the numbers </strong>should raise their hand first and shout "Tombola!". ',
    "5) <strong> ROUND - 1 </strong>",
    "a) The round will be conducted in two sessions.",
    "b) In each session, the <strong>first eight players who strike all the 15 numbers will be selected for Round - 2.</strong>",
    "6) <strong> ROUND - 2 </strong>",
    "a) Some patterns will be shown to the <strong> players two minutes before the final round begins (e.g. Early Five). </strong> ",
    "b) After the game begins, if the player creates any pattern, they can shout that pattern and some points will be given.",
    "c) Each of the patterns can be claimed only by the first player to shout. <strong> If any player tries to claim an already claimed pattern, 10 points will be deducted. </strong>",
    "d) A player can claim as many patterns as he wishes. But <strong>if any pattern claimed is found to be false, the player will be disqualified from the game.</strong>",
    "e) The game will end when the first player shouts Tombola.",
    "f) Winners of the game will be decided on the basis of points.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const danceImage = require("../../../Assets/posters/THAMBOLA.png");
  const registrationLink = [{ link: "https://forms.gle/iPHNNpeg5NRB1AC88" }];

  const organizersData = [
    {
      title: "M Himanshu Reddy",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/_himanshu.reddy_/",
        },
      ],
      email: "201125@iiitt.ac.in",
      phoneNumber: "9441211171",
      backgroundImage: HimanshuImage,
    },
    {
      title: "Samuel Nadar",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/samuel_nadar1211/",
        },
      ],
      email: "221132@iiitt.ac.in",
      phoneNumber: "9920688750",
      backgroundImage: SamuelImage,
    },
    {
      title: "K Brundha Sai",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/__brundha__k/",
        },
      ],
      email: "221125@iiitt.ac.in",
      phoneNumber: "8688537477",
      backgroundImage: BrundhaImage,
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
        <h3 className="volunteer-heading">Tombola Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default Thambola;
