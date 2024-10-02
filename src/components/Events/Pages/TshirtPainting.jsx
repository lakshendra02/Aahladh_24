import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import SaicharanImage from "../../../Assets/Volunteers/Saicharan.jpg";
import AmulyaImage from "../../../Assets/Volunteers/MALOTHUAMULYA.jpg";
import NidhiImage from "../../../Assets/Volunteers/VISHWAKARMANIDHI.jpg";
import TanyaImage from "../../../Assets/Volunteers/TANYA.jpg";

const TshirtPainting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "1) Two members per team: <strong> one model (wearing the t-shirt) and one artist (painting). </strong>",
    "2) <strong>Teams must contain either two boys or two girls.</strong>",
    "3) Equipment for the event will be provided by the organizers.",
    "4) Time limit for the event is <strong> 60 minutes.</strong>",
    "5) Participants will be judged based on <strong> creativity, innovation, and design.</strong>",
    "6) Decision of the judges will be final and binding.",
    "7) Participants must treat <strong> fellow participants, event staff, and the event space with respect and courtesy </strong> at all times.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const singingImage = require("../../../Assets/posters/T-SHIRTPAINTING.png");
  const registrationLink = [{ link: "https://forms.gle/LQ2X8SzmMTmtXHVK8" }];

  const organizersData = [
    {
      title: "V Saicharan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/saicharan_chintu_07/",
        },
      ],
      email: "201137@iiitt.ac.in",
      phoneNumber: "9182668826",
      backgroundImage: SaicharanImage,
    },
    {
      title: "Malothu Amulya",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/amulya_ammu_41/",
        },
      ],
      email: "211220@iiitt.ac.in",
      phoneNumber: "9182039443",
      backgroundImage: AmulyaImage,
    },
    {
      title: "Nidhi Vishwakarma",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillLinkedin size={20} />,
          link: "https://www.linkedin.com/in/nidhi-vishwakarma-71ba8427b",
        },
      ],
      email: "221257@iiitt.ac.in",
      phoneNumber: "9510928489",
      backgroundImage: NidhiImage,
    },
    {
      title: "Tanya Kumari",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/tanya.jha17/",
        },
      ],
      email: "221250@iiitt.ac.in",
      phoneNumber: "6201358772",
      backgroundImage: TanyaImage,
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
        <h3 className="volunteer-heading">T-shirt Painting Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default TshirtPainting;
