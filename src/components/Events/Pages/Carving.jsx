import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import BhanuRekhaImage from "../../../Assets/Volunteers/BHANUREKHA.jpg";
import YuvarajuImage from "../../../Assets/Volunteers/RYuvaraju.jpg";
import HarshaImage from "../../../Assets/Volunteers/HarshaVikhyath.jpeg";
import HarshithImage from "../../../Assets/Volunteers/HARSHITKUMAR.jpg";

const Carving = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "1) Two members should be in a team to participate in the event. Only team leaders have to fill out the form (team members should not) ",
    "2) The contestants will have one hour to complete the piece for judging",
    "3) Participants should refrain from bringing any pre-carved items",
    "4) Participants should report 15 minutes prior to the start of the even. ",
    "5) All tools including hand tools like knives, Peeler, etc. will be provided.",
  ];

  const singingImage = require("../../../Assets/posters/Carving.png");
  const registrationLink = [{ link: "https://forms.gle/YqRY7MQSeCqYxtRp8" }];

  const organizersData = [
    {
      title: "D Harsha Vikhyath",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/n_oic_y_boy_/",
        },
      ],
      email: "201114@iiitt.ac.in",
      phoneNumber: "8688258704",
      backgroundImage: HarshaImage,
    },
    {
      title: "R Yuvaraju",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/yuvi_8156/",
        },
      ],
      email: "201236@iiitt.ac.in",
      phoneNumber: "9515816165",
      backgroundImage: YuvarajuImage,
    },
    {
      title: "Harshit Kumar Gupta",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/harshit_hj007/",
        },
      ],
      email: "211211@iiitt.ac.in",
      phoneNumber: "8601176818",
      backgroundImage: HarshithImage,
    },
    {
      title: "V Bhanu Rekha",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/___bhanu_rekha___/",
        },
      ],
      email: "221255@iiitt.ac.in",
      phoneNumber: "9392228412",
      backgroundImage: BhanuRekhaImage,
    },
  ];
  return (
    <div>
      <AboutEvent
        paragraphs={aboutText}
        imageSrc={singingImage}
        registrationLinks={registrationLink}
      />
      <div>
        <h3 className="volunteer-heading">Vegetable Carving Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default Carving;
