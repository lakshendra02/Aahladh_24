import React from "react";
import "./AnimateCard.css";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Animate = ({
  name,
  job,
  image,
  phone,
  email,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
}) => {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div className="member-card" style={cardStyle}>
      <div className="footer-card">
        <div className="connections">
          <Link to={`tel:${phone}`} className="connection">
            <div className="icon">
              <FaPhone />
            </div>
          </Link>
          <Link to={`mailto:${email}`} className="connection">
            <div className="icon">
              <FaEnvelope />
            </div>
          </Link>
          {facebookUrl && (
            <Link to={facebookUrl} target="_blank" className="connection">
              <div className="icon">
                <FaFacebook />
              </div>
            </Link>
          )}
          {instagramUrl && (
            <Link to={instagramUrl} target="_blank" className="connection">
              <div className="icon">
                <FaInstagram />
              </div>
            </Link>
          )}
          <Link to={linkedinUrl} target="_blank" className="connection">
            <div className="icon">
              <FaLinkedin />
            </div>
          </Link>
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="job">{job}</div>
        </div>
      </div>
      <div className="card-blur"></div>
    </div>
  );
};

export default Animate;
