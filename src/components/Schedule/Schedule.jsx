import React from "react";
import "./Schedule.css";
import { Link } from "react-router-dom";

const timelineData = [
  {
    eraTitle: "DAY 1 (Sept 1st)",
    entries: [
      {
        time: "01/09/2023 10:00AM - 11:30AM",
        title: "Inauguration",
      },
      {
        time: "01/09/2023 11:00AM - 12:30PM",
        title: "Face Painting",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/nqdoUKYdNHigA9n18",
      },
      {
        time: "01/09/2023 2:00PM - 3:30PM",
        title: "Dumb Charades (Round-1)",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/1EANJz4uGzKATWod7",
      },
      {
        time: "01/09/2023 3:45PM - 06:00PM",
        title: "Guess the Object",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/4sg8sBph6R54ddSw5",
      },
    ],
  },
  {
    eraTitle: "DAY 2 (Sept 2nd)",
    entries: [
      {
        time: "02/09/2023 9:00AM - 10:00AM",
        title: "BlindFold Art",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/wy58T8obtKZ7gvK19",
      },
      {
        time: "02/09/2023 10:15AM - 12:30PM",
        title: "Music (Round-1)",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/tbr8hRpcwVqvDGdw7",
      },
      {
        time: "02/09/2023 2:00PM - 3:00PM",
        title: "Tombola",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/iPHNNpeg5NRB1AC88",
      },
      {
        time: "02/09/2023 3:10PM - 4:00PM",
        title: "Dumb Charades (Finals)",
        description: "Click here to register for the event.",
        registrationLink: "www.example.com",
      },
      {
        time: "02/09/2023 4:15PM - 6:00PM",
        title: "Dance (Round-1)",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/7fCfcLF5t55seNpcA",
      },
    ],
  },
  {
    eraTitle: "DAY 3 (Sept 3rd)",
    entries: [
      {
        time: "03/09/2023 8:30PM - 10:00PM",
        title: "T-Shirt Painting",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/LQ2X8SzmMTmtXHVK8",
      },
      {
        time: "03/09/2023 10:15AM - 12:30PM",
        title: "Treasure Hunt (INTRA)",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/WGzWL2EnLCQXqpKUA",
      },
      {
        time: "03/09/2023 01:45PM - 2:45PM",
        title: "Music (Finals)",
      },
      {
        time: "03/09/2023 3:00PM - 4:30PM",
        title: "Dance (Finals)",
      },
      {
        time: "03/09/2023 4:45PM - 5:45PM",
        title: "Carving (INTRA)",
        description: "Click here to register for the event.",
        registrationLink: "https://forms.gle/YqRY7MQSeCqYxtRp8",
      },
      {
        time: "03/09/2023 FROM 6:00PM",
        title: "EDM Night (INTRA)",
      },
    ],
  },
  {
    eraTitle: "FUNZONE (DAY 1)",
    entries: [
      {
        time: "01/09/2023 12:00PM - 01:00PM",
        title: "Ballons vs Glass Showdown",
      },
      {
        time: "01/09/2023 02:00PM - 03:00PM",
        title: "Ring Toss Fiesta",
      },
      {
        time: "01/09/2023 03:00PM - 04:00PM",
        title: "Coin-aqua Challenge",
      },
      {
        time: "01/09/2023 04:00PM - 05:00PM",
        title: "Unseen Artistry",
      },
    ],
  },
  {
    eraTitle: "FUNZONE (DAY 2)",
    entries: [
      {
        time: "02/09/2023 10:00AM - 11:00AM",
        title: "Ballons vs Glass Showdown",
      },
      {
        time: "02/09/2023 11:30AM - 12:30PM",
        title: "Ring Toss Fiesta",
      },
      {
        time: "02/09/2023 02:30PM - 03:30PM",
        title: "Coin-aqua Challenge",
      },
      {
        time: "02/09/2023 04:00PM - 05:00PM",
        title: "Unseen Artistry",
      },
    ],
  },
  {
    eraTitle: "FUNZONE (DAY 3)",
    entries: [
      {
        time: "03/09/2023 10:00AM - 11:00AM",
        title: "Ballons vs Glass Showdown",
      },
      {
        time: "03/09/2023 11:30AM - 12:30PM",
        title: "Ring Toss Fiesta",
      },
      {
        time: "03/09/2023 02:30PM - 03:30PM",
        title: "Coin-aqua Challenge",
      },
      {
        time: "03/09/2023 04:00PM - 05:00PM",
        title: "Unseen Artistry",
        
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="schedule-css">
      {timelineData.map((era, eraIndex) => (
        <div
          key={eraIndex}
          className="timeline-wrap"
          style={{
            backgroundColor: eraIndex % 2 === 0 ? "#272727" : "#222222",
          }}
        >
          <ul className="timeline">
            <li className="era">
              <h2 className="era-title">{era.eraTitle}</h2>
            </li>
            {era.entries.map((entry, entryIndex) => (
              <li
                key={entryIndex}
                className={`entry entry-${
                  entryIndex % 2 === 0 ? "left" : "right"
                }`}
              >
                <div
                  className="entry-content wow animated fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  {entry.time && <h5>{entry.time}</h5>}
                  <h2 className="entry-title">{entry.title}</h2>
                  <p className="entry-description">{entry.description}</p>
                  {entry.registrationLink && ( 
                    <Link to={entry.registrationLink} className="event-btn">
                      Register Here
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
