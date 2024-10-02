import React,{useEffect} from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import RohanImage from "../../../Assets/FUNZONE/GotiyadaRohan.jpg";
import BasheerImage from "../../../Assets/FUNZONE/BASHEERAHMED.jpg";
import MohanaImage from "../../../Assets/FUNZONE/MOHANA.jpg";
import ChandanaImage from "../../../Assets/FUNZONE/HARICHANDANA.png";

const BlindArt = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    "1) Each team consists of <strong> two players </strong>.",
    "2) <strong>One player describes the picture given by us </strong> and the <strong> second player draws according to the given instructions by his/ her partner </strong>.",
    "3) Description should be done in a superficial way without revealing the name or details of the image.",
    "4) Blindfold the person who draws.",
    "5) Only the <strong>describer is allowed to see the picture </strong>.",
    "6) The <strong>drawing should be completed within the stipulated time </strong>.",
    "7) The best will qualify for the next round.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const singingImage = require("../../../Assets/posters/UNSEENARTISTRY.png");
  const registrationLink = [{ link: "" }];

  const organizersData = [
    {
      title: "Gotiyada Rohan",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/_r.o.h.a.n.___/",
        },
      ],
      email: "201110@iiitt.ac.in",
      phoneNumber: "9121791126",
      backgroundImage: RohanImage,
    },
    {
      title: "Basheer Ahmed",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/basheerahmed_shaik/",
        },
      ],
      email: "211232@iiitt.ac.in",
      phoneNumber: "7893549328",
      backgroundImage: BasheerImage,
    },
    {
      title: "Dandu Mohana",
      copy: "Volunteer",
      socialMediaIcons: [{}],
      email: "221215@iiitt.ac.in",
      phoneNumber: "9441950844",
      backgroundImage: MohanaImage,
    },
    {
      title: "J Hari Chandana",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://instagram.com/hari_chandana______/",
        },
      ],
      email: "221222@iiitt.ac.in",
      phoneNumber: "9550001758",
      backgroundImage: ChandanaImage,
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
        <h3 className="volunteer-heading">Unseen Artistry Volunteers</h3>
        <Organizers organizersData={organizersData} />
      </div>
    </div>
  );
};

export default BlindArt;
