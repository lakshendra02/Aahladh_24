import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aahladh from "./components/Aahladh/Aahladh";
import FunZone from "./components/FunZone/FunZone";
import Singing from "./components/Events/Pages/Singing";
import Dance from "./components/Events/Pages/Dance";
import Committee from "./components/Committee/Committee";
import Schedule from "./components/Schedule/Schedule";
import TshirtPainting from "./components/Events/Pages/TshirtPainting";
import Carving from "./components/Events/Pages/Carving";
import GuessTheObject from "./components/Events/Pages/GuessTheObject";
import Thambola from "./components/Events/Pages/Thambola";
import FacePainting from "./components/Events/Pages/FacePainting";
import DumbCharades from "./components/Events/Pages/DumbCharades";
import BlindFoldArt from "./components/Events/Pages/BlindFoldArt";
import RecreateScene from "./components/Events/Pages/RecreateScene";
import Photography from "./components/Events/Pages/Photography";
import TreasureHunt from "./components/Events/Pages/TreasureHunt";
import Events from "./components/Events/Events";
import GlassBallon from "./components/Events/Pages/GlassBallon";
import WaterTub from "./components/Events/Pages/WaterTub";
import BlindArt from "./components/Events/Pages/BlindArt";
import RingToss from "./components/Events/Pages/RingToss";
import Rules from "./components/Rules/Rules";

const Allroutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Aahladh />} />
        <Route path="/FunZone" element={<FunZone />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Committee" element={<Committee />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Singing" element={<Singing />} />
        <Route path="/Dance" element={<Dance />} />
        <Route path="/Carving" element={<Carving />} />
        <Route path="/tShirtPainting" element={<TshirtPainting />} />
        <Route path="/GuessTheObject" element={<GuessTheObject />} />
        <Route path="/Thambola" element={<Thambola />} />
        <Route path="/FacePainting" element={<FacePainting />} />
        <Route path="/DumbCharades" element={<DumbCharades />} />
        <Route path="/BlindFoldArt" element={<BlindFoldArt />} />
        <Route path="/RecreateScene" element={<RecreateScene />} />
        <Route path="/Photography" element={<Photography />} />
        <Route path="/TreasureHunt" element={<TreasureHunt />} />
        <Route path="/GlassBallon" element={<GlassBallon />} />
        <Route path="/WaterTub" element={<WaterTub />} />
        <Route path="/BlindArt" element={<BlindArt />} />
        <Route path="/RingToss" element={<RingToss />} />
      </Routes>
    </Router>
  );
};

export default Allroutes;
