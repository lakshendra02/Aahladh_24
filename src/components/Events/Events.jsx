import React from "react";
import EventCard from "./EventCard";

import SingingImage from "../../Assets/events/singing.gif";
import Dance from "../../Assets/events/dance1.gif";
import FacePainting from '../../Assets/events/facepainting.gif'
import Tshirtpainting from '../../Assets/events/tshirtpainting.gif'
import Treasurehunt from '../../Assets/events/treasurehunt.gif'
import Carving from '../../Assets/events/craving.gif'
import GTO from '../../Assets/events/guesstheobject.gif'
import DumbCharades from '../../Assets/events/dumbcharades.gif'
import Tombola from '../../Assets/events/tombola.gif'
import RTS from '../../Assets/events/RTS.gif'
import Photography from '../../Assets/events/photography.gif'
import BFA from '../../Assets/events/BLINDFOLDART.gif'

const Events = () => {
  const eventData = [
    {
      title: "MUSIC",
      copy: "Click here to register for the event",
      registrationLink: "/Singing",
      backgroundImage: SingingImage,
    },
    {
      title: "DANCE",
      copy: "Click here to register for the event",
      registrationLink: "/Dance",
      backgroundImage: Dance,
    },
    {
      title: "FACE PAINTING",
      copy: "Click here to register for the event",
      registrationLink: "/FacePainting",
      backgroundImage: FacePainting,
    },
    {
      title: "T-SHIRT PAINTING",
      copy: "Click here to register for the event",
      registrationLink: "/tShirtPainting",
      backgroundImage: Tshirtpainting,
    },
    {
      title: "VEGETABLE CARVING",
      copy: "Click here to register for the event",
      registrationLink: "/Carving",
      backgroundImage: Carving,
    },
    {
      title: "TREASURE HUNT",
      copy: "Click here to register for the event",
      registrationLink: "/TreasureHunt",
      backgroundImage: Treasurehunt,
    },
    {
      title: "GUESS THE OBJECT",
      copy: "Click here to register for the event",
      registrationLink: "/GuessTheObject",
      backgroundImage: GTO,
    },
    {
      title: "DUMB CHARADES",
      copy: "Click here to register for the event",
      registrationLink: "/DumbCharades",
      backgroundImage:DumbCharades,
    },
    {
      title: "TOMBOLA",
      copy: "Click here to register for the event",
      registrationLink: "/Thambola",
      backgroundImage: Tombola,
    },
    {
      title: "BLINK FOLD ART",
      copy: "Click here to register for the event",
      registrationLink: "/BlindFoldArt",
      backgroundImage: BFA,
    },
    {
      title: "RECREATE THE SCENE",
      copy: "Click here to register for the event",
      registrationLink: "/RecreateScene",
      backgroundImage: RTS,
    },
    {
      title: "PHOTOGRAPHY",
      copy: "Click here to register for the event",
      registrationLink: "/Photography",
      backgroundImage: Photography,
    },
  ];
  return (
    <div className="event-data-css">
      <EventCard eventData={eventData} />
    </div>
  );
};

export default Events;
