import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Benefits from "./Components/Benefits/Benefits";
import Title from "./Components/Title/Title";
import Sistem from "./Components/Sistem/Sistem";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="benefits_1">
      <Title title='Sobre Mev'/>
      <Benefits />
      <Title title='Sistema'/>
      <Sistem />
      
      </div>
    </div>
  );
};

export default App;
