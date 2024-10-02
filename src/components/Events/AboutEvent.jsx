import React, { useState } from "react";
import "./Events.css";
import Registration from "./Registration/Registration";

const AboutEvent = ({ paragraphs, imageSrc, registrationLinks }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const renderParagraphs = () => {
    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className="singing-description"
        style={{ display: expanded || index < 4 ? "block" : "none" }}
      >
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="singing-container">
      <div className="singing-image-container">
        <img src={imageSrc} alt="Singing Event" className="singing-image" />
      </div>
      <div className="about-singing-container">
        <div className="about-singing">
          <h2 className="singing-heading">Rules and Regulations</h2>
          {renderParagraphs()}
          {paragraphs.length > 4 && (
            <button className="see-more-less-button" onClick={toggleExpand}>
              {expanded ? "See Less" : "See More.."}
            </button>
          )}
        </div>
        <div>
          {registrationLinks.map((data, index) => (
            data.link && <Registration key={index} registrationLink={data.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;








