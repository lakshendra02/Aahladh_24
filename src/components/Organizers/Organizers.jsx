import React from "react";
import "./Organizers.css";
// import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope, FaPhone } from "react-icons/fa";
// import VishnuImage from "../../Assets/Vishnu.jpg";
// import ChaitanyaImage from "../../Assets/Chaitanya.jpg";

function Card(props) {
  return (
    <div
      className="organizers-card"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="organizers-content">
        <h2 className="organizers-title">{props.title}</h2>
        <p className="organizers-copy">{props.copy}</p>

        <div className="organizers-social-icons">
          <a href={`tel:${props.phoneNumber}`} className="contact-icon-phone">
            <FaPhone size={16} />
          </a>
          <a href={`mailto:${props.email}`} className="contact-icon">
            <FaEnvelope size={20} />
          </a>
          {props.socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const Organizers = ({ organizersData }) => {
  // const socialMediaIcons = [
  //   {
  //     icon: <AiFillInstagram size={20} />, // Use the imported icon component
  //     link: "instagram-profile-link",
  //   },
  // ];
  return (
    <div className="page-content ">
      {organizersData.map((organizer, index) => (
        <Card
          key={index}
          title={organizer.title}
          copy={organizer.copy}
          socialMediaIcons={organizer.socialMediaIcons}
          email={organizer.email}
          phoneNumber={organizer.phoneNumber}
          backgroundImage={organizer.backgroundImage}
        />
      ))}

      {/* <Card
        title="Vishnu Vardhan"
        copy="Volunteer"
        socialMediaIcons={socialMediaIcons}
        email="201106@iiitt.ac.in"
        phoneNumber="7981988676"
        backgroundImage={VishnuImage}
      />
      <Card
        title="Chaitanya"
        copy="Music Volunteer"
        socialMediaIcons={socialMediaIcons}
        email="201119@iiitt.ac.in"
        phoneNumber="8008484139"
        backgroundImage={ChaitanyaImage}
      />
      <Card
        title="Desert Destinations"
        copy="It's the desert you've always dreamed of"
        socialMediaIcons={socialMediaIcons}
        email="vishnu@example.com"
        phoneNumber="+1234567890"
      />
      <Card
        title="Explore The Galaxy"
        copy="Seriously, straight up, just blast off into outer space today"
        socialMediaIcons={socialMediaIcons}
        email="vishnu@example.com"
        phoneNumber="+1234567890"
      />
      <Card
        title="Desert Destinations"
        copy="It's the desert you've always dreamed of"
        socialMediaIcons={socialMediaIcons}
        email="vishnu@example.com"
        phoneNumber="+1234567890"
      />
      <Card
        title="Explore The Galaxy"
        copy="Seriously, straight up, just blast off into outer space today"
        socialMediaIcons={socialMediaIcons}
        email="vishnu@example.com"
        phoneNumber="+1234567890"
      /> */}
    </div>
  );
};

export default Organizers;
