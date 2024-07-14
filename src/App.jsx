import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Benefits from "./Components/Benefits/Benefits";
import Title from "./Components/Title/Title";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="benefits_1">
      <Title title='Sobre Mev'/>
      <Benefits />
      <Contact />
      </div>
    </div>
  );
};

export default App;
