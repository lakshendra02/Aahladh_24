import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

function Card(props) {
  return (
    <div
      className="organizers-card"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <div className="organizers-content">
        <h2 className="organizers-title">{props.title}</h2>
        <p className="organizers-copy">{props.copy}</p>
        <Link to={props.registrationLink} className="event-btn">
          Click Here to Register
        </Link>
      </div>
    </div>
  );
}

const EventCard = ({ eventData }) => {
  return (
    <div className="page-content">
      {eventData.map((event, index) => (
        <Card
          key={index}
          title={event.title}
          copy={event.copy}
          registrationLink={event.registrationLink}
          backgroundImage={event.backgroundImage}
        />
      ))}
    </div>
  );
};

export default EventCard;
