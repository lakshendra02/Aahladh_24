import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../style.css";
import TreasureHuntImage from '../../Assets/Eventbg/TreasureHunt.jpg'
import TshirtPaintingImage from '../../Assets/Eventbg/TSHIRTPAINTING.png'
import DumbCharadesImage from '../../Assets/Eventbg/DumbCharades.png' 
import CarvingImage from '../../Assets/Eventbg/Vegetablecarving.png'
import GuessObjectImage from '../../Assets/Eventbg/GuessTheObject.png'
import TombolaImage from '../../Assets/Eventbg/Tombola.png'
import PhotographyImage from '../../Assets/Eventbg/Photography.png'
import BallonImage from '../../Assets/Eventbg/Ballon.png'
import CoinAquaImage from '../../Assets/Eventbg/CoinAqua.png'
import ArtistryImage from '../../Assets/Eventbg/Artistry.png'
import BlindArtImage from '../../Assets/Eventbg/BLINDART.png'
import RecreateSceneImage from '../../Assets/Eventbg/RECRETESCENE.png'
import Ringtoss from '../../Assets/Eventbg/ringtoss.jpg'

const Slider = () => {
  const slideRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      const interval = setInterval(() => {
        setLoadingProgress((prevProgress) =>
          prevProgress < 100 ? prevProgress + 10 : 0
        );
      }, 500);

      return () => clearInterval(interval);
    };

    simulateLoading();
  }, []);


  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://res.cloudinary.com/dghces20b/image/upload/v1691079127/sing_dtjstm.jpg",
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "MUSIC",
      registrationLink: "https://forms.gle/tbr8hRpcwVqvDGdw7",
      link: "/Singing",
    },
    {
      id: 2,
      imgUrl:
        "https://res.cloudinary.com/dghces20b/image/upload/v1691079127/dance_yoqjgz.jpg",
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "DANCE",
      registrationLink: "https://forms.gle/7fCfcLF5t55seNpcA",
      link: "/Dance",
    },
    {
      id: 3,
      imgUrl:
      GuessObjectImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "GUESS THE OBJECT",
      registrationLink: "https://forms.gle/4sg8sBph6R54ddSw5",
      link: "/GuessTheObject",
    },
    {
      id: 4,
      imgUrl:
        "https://res.cloudinary.com/dghces20b/image/upload/v1691079127/face_eaxltt.jpg",
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "FACE PAINTING",
      registrationLink: "https://forms.gle/nqdoUKYdNHigA9n18",
      link: "/FacePainting",
    },
    {
      id: 5,
      imgUrl:
      DumbCharadesImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "DUMB CHARADES",
      registrationLink: "https://forms.gle/1EANJz4uGzKATWod7",
      link: "/DumbCharades",
    },
    {
      id: 6,
      imgUrl:
      BlindArtImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "BLIND FOLD ART",
      registrationLink: "https://forms.gle/wy58T8obtKZ7gvK19",
      link: "/BlindFoldArt",
    },
    {
      id: 7,
      imgUrl:
      TshirtPaintingImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "T-SHIRT PAINTING",
      registrationLink: "https://forms.gle/LQ2X8SzmMTmtXHVK8",
      link: "/tShirtPainting",
    },
    {
      id: 8,
      imgUrl:
      CarvingImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "CARVING",
      registrationLink: "https://forms.gle/YqRY7MQSeCqYxtRp8",
      link: "/Carving",
    },
    {
      id: 9,
      imgUrl:
      TreasureHuntImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "TREASURE HUNT",
      registrationLink: "https://forms.gle/WGzWL2EnLCQXqpKUA",
      link: "/TreasureHunt",
    },
    {
      id: 10,
      imgUrl:
      RecreateSceneImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "RECREATE THE SCENE",
      registrationLink: "https://forms.gle/rZUbuKur7LPw5xrN7",
      link: "/RecreateScene",
    },
    {
      id: 11,
      imgUrl:
      PhotographyImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "PHOTOGRAPHY",
      registrationLink: "https://forms.gle/pZoDnT1x6kAHv4cQ8",
      link: "/Photography",
    },
    {
      id: 12,
      imgUrl:
      TombolaImage,
      desc: "Click Register Button to register for the event. Click See More to view more about the event.",
      name: "TOMBOLA",
      registrationLink: "https://forms.gle/iPHNNpeg5NRB1AC88",
      link: "/Thambola",
    },
    {
      id: 13,
      imgUrl:
      BallonImage,
      desc: "Click See More to view more about the event.",
      name: "GLASS + BALLON ",
      link: "/GlassBallon",
    },
    {
      id: 14,
      imgUrl:
      CoinAquaImage,
      desc: "Click See More to view more about the event.",
      name: "Water Tub ",
      link: "/WaterTub",
    },
    {
      id: 15,
      imgUrl:
      ArtistryImage,
      desc: "Click See More to view more about the event.",
      name: "Unseen Artistry ",
      link: "/BlindArt",
    },
    {
      id: 16,
      imgUrl:
      Ringtoss,
      desc: "Click See More to view more about the event.",
      name: "Ring Toss ",
      link: "/RingToss",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="loadbar" style={{ width: `${loadingProgress}%` }}></div>
      <div id="slide" ref={slideRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.desc}</div>
              {item.registrationLink && ( 
                <Link to={item.registrationLink} className="btn-name">
                  <div class="register-button" id="btn">
                    <div id="dub-arrow">
                      <img
                        src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                        alt="arrow"
                        className="btn-img"
                      />
                    </div>
                    Register
                  </div>
                </Link>
              )}
              <br />
              <Link to={item.link} className="btn-name">
                <div class="register-button break-line-button" id="btn">
                  <div id="dub-arrow">
                    <img
                      src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                      alt="arrow"
                      className="btn-img"
                    />
                  </div>
                  See More
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handleClickPrev}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleClickNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
