import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Allroutes from "./Allroutes";

function App() {
  return (
    <div>
      <>
        <NavBar />
        <Allroutes />
        <Footer />
      </>
    </div>
  );
}

export default App;
