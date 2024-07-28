import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Benefits from "./Components/Benefits/Benefits";
import Title from "./Components/Title/Title";
import Sistem from "./Components/Sistem/Sistem";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="benefits_1">
        <Title title="Sobre Mev" />
        <Benefits />
          <Title title="Sistema" />
          <Sistem setPlayState={setPlayState} />
        <Title title="Contacto" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
