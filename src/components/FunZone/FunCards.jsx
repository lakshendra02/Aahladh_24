import React from 'react'
import { Link } from "react-router-dom";
import "../Events/Events.css";

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
          Click Here to See More
        </Link>
      </div>
    </div>
  );
}

const FunCards = ({eventData}) => {
    return (
        <div className="page-content-css">
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
}

export default FunCards
