import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import GouthamImage from "../../../Assets/Volunteers/ShameerpetGoutham.jpg";
import AnanyaImage from "../../../Assets/Volunteers/ANANYADEEPTHI.jpg";
import BhupeshImage from "../../../Assets/Volunteers/BHUPESHGUPTA.jpg";
import PrakartiImage from "../../../Assets/Volunteers/PRAKARTI.jpg";

const BlindFoldArt = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "1) Participants will receive the <strong> supplies and designated workspaces </strong>.",
    "2) Participants will be <strong> blindfolded </strong> and will be provided with a theme.",
    "3) After <strong>10 minutes, everyone can remove their blindfolds and view their art piece </strong>.",
    "4) At the <strong> 25-minute mark, a challenge is presented. The winner can remove their blindfold for 2 minutes </strong>.",
    "5) 15 minutes after challenge 1, another challenge occurs with the same advantage for the winner.",
    "6) The event ends in 1 hour, <strong>celebrating creativity and unique artworks </strong>.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const danceImage = require("../../../Assets/posters/BLINDFOLDART.png");
  const registrationLink = [{ link: "https://forms.gle/wy58T8obtKZ7gvK19" }];

  const organizersData = [
    {
      title: "Shameerpet Goutham",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/_goutham19_/",
        },
      ],
      email: "201134@iiitt.ac.in",
      phoneNumber: "8618091957",
      backgroundImage: GouthamImage,
    },

    {
      title: "Bhupesh Gupta",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/bhupesh_7_/",
        },
      ],
      email: "211209@iiitt.ac.in",
      phoneNumber: "9785400480",
      backgroundImage: BhupeshImage,
    },
    {
      title: "A Ananya Deepthi",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/acha-ananya-deepthi-b4553027a",
        },
      ],
      email: "221101@iiitt.ac.in",
      phoneNumber: "8790713467",
      backgroundImage: AnanyaImage,
    },
    {
      title: "Prakarti Prabhakar",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/prakarti-prabhakar-2952ba212",
        },
      ],
      email: "221141@iiitt.ac.in",
      phoneNumber: "7906586285",
      backgroundImage: PrakartiImage,
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
        <h3 className="volunteer-heading">Blind Fold Art Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default BlindFoldArt;
