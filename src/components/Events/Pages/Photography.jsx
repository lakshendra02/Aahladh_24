import React, { useEffect } from "react";
import AboutEvent from "../AboutEvent";
import Organizers from "../../Organizers/Organizers";
import { AiFillInstagram } from "react-icons/ai";
import AbhishekImage from "../../../Assets/Volunteers/RAbhishek.jpg";
import AkramImage from "../../../Assets/Volunteers/ABDULAKRAM.jpeg";
import RakeshImage from "../../../Assets/Volunteers/ARUMALLARAKESH.jpg";

const Photography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutText = [
    '1) Entries should be in form of <strong> PNG, JPEG, JPG </strong>extensions. <br /> &nbsp;&nbsp; <strong>E.g. " RamaKrishna_Mulugu.png " </strong>',
    "2) From each Theme only one picture should be uploaded to the drive link i.e, <strong> Silhouettes </strong> or <strong> Through the Looking Glass </strong> .",
    "3) Editing can be done with respect to the colour( <strong> white balance, cast , correction, brightness, contrast, exposure is only allowed </strong>). And you just need to send the screenshot of the parameter you have used.",
    "4) <strong> Plagiarism </strong> (taking someone else's work as their own) is strictly prohibited.",
    "5) No <strong> Signature, Stamp, watermark, or any other identifying marks </strong> is allowed anywhere on the entries.",
    "6) Entries should not contain any objectionable content.",
    "7) Place of the photo taken might be asked from you if there is any issue with the photo violating the above condition  consideration.",
    "8) Photos should be taken in between the date of aahaladh event.",
    " <strong> Note: Failing to meet above requirements would result in disqualification of participant</strong>.",
  ];

  const formattedAboutText = aboutText.map((text, index) => (
    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
  ));

  const danceImage = require("../../../Assets/posters/PHOTOGRAPHY.jpg");
  const registrationLink = [{ link: "https://forms.gle/pZoDnT1x6kAHv4cQ8" }];

  const organizersData = [
    {
      title: "R Abhishek",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/a.b.h.i.s.h.e.k_16/",
        },
      ],
      email: "201202@iiitt.ac.in",
      phoneNumber: "9360362617",
      backgroundImage: AbhishekImage,
    },
    {
      title: "Md Abdul Akram",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/akram_3104/",
        },
      ],
      email: "211120@iiitt.ac.in",
      phoneNumber: "8897439299",
      backgroundImage: AkramImage,
    },
    {
      title: "Rakesh Arumalla",
      copy: "Volunteer",
      socialMediaIcons: [
        {
          icon: <AiFillInstagram size={20} />,
          link: "https://www.instagram.com/rakesh__arumalla__21/",
        },
      ],
      email: "221206@iiitt.ac.in",
      phoneNumber: "79812738500",
      backgroundImage: RakeshImage,
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

export default Photography;
