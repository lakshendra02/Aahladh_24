import React from "react";
import "./Registration.css";
import {Link} from 'react-router-dom';

const Registration = ({ registrationLink }) => {
  return (
    <>
      <div className="registration-container">
        <div className="emoji-container">
          <span role="img" aria-label="smile" className="bouncing-emoji">
            😀
          </span>
        </div>
        <div className="register-box">
          <div className="register-message">
            <h1 className="register-heading">Registration Link</h1>
            <p className="register-description">
              Click here to register for the event
            </p>
          </div>
          {/* <button className="registration-btn">
            <p className="green">Register Here</p>
          </button> */}
          <Link to={registrationLink} className="registration-btn">
            <p className="green registration-btn">Register Here</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Registration;
