import React from "react";

// Components
import NavBar from "./components/NavBar/NavBar";
import Countdown from "./components/Countdown/Countdown";
import HeroSection from "./components/HeroSection/HeroSection";
import Badges from "./components/Badges/Badges";
import Prizes from "./components/Prizes/Prizes";
import Timeline from "./components/Timeline/Timeline";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Particles from "./components/BackgroundParticles/BackgroundParticles.js";
// Style
import "./styles.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Countdown />
      <HeroSection />
      <Badges />
      <Prizes />
      <Timeline />
      <div className="background-1">
        
        <Particles />
      </div>
      <Register />
      <Footer />
    </>
  );
};

export default App;
