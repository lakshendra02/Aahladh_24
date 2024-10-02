import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import VishnuImage from "../../../Assets/FUNZONE/Vishnu.jpg";
import BhargaviImage from "../../../Assets/FUNZONE/BHARGAVI.jpg";
import SharmilaImage from "../../../Assets/FUNZONE/SHARMILA.jpg";
import JahnaviImage from "../../../Assets/FUNZONE/JAHNAVI.jpg";

const WaterTub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const aboutText = [
    "1) Each <strong> contestant will be provided with 3 coins. </strong>",
    "2) Target area is given in the <strong> tub of water. </strong>",
    "3) Each <strong> contestant will be given 3 chances.</strong>",
    "4) In the <strong> given 3 chances contestant's should drop the coin atleast 2 times in the targeted area. </strong>",
    "5) Contestant's should not touch the given tub at any cost.",
    "6) The contestant who <strong> drops more no.of coins in the given targeted area by following all the given rules are declared as winners.</strong>",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const singingImage = require("../../../Assets/posters/WATERTUB.png");
  const registrationLink = [{ link: "" }];

  const organizersData = [
    {
      title: "Vishnu Vardhan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/_iam_.vishnu_/",
        },
      ],
      email: "201106@iiitt.ac.in",
      phoneNumber: "7981988676",
      backgroundImage: VishnuImage,
    },
    {
      title: "Y Bhargavi",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/bhargavi.___/",
        },
      ],
      email: "211237@iiitt.ac.in",
      phoneNumber: "7702025483",
      backgroundImage: BhargaviImage,
    },
    {
      title: "Sharmila K",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/sharmila_k123/",
        },
      ],
      email: "221227@iiitt.ac.in",
      phoneNumber: "9059664107",
      backgroundImage: SharmilaImage,
    },
    {
      title: "V Jahnavi",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/_.jahnavi_.reddy/",
        },
      ],
      email: "221252@iiitt.ac.in",
      phoneNumber: "7672097479",
      backgroundImage: JahnaviImage,
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
        <h3 className="volunteer-heading">Water Tub Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default WaterTub;
