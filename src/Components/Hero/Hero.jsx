import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero header" id="inicio">
      <div className="hero-text">
        <h1>
          Transforma tu negocio gastronómico con nuestro sistema inteligente:
          Rápido, Sencillo y Cómodo. Simplifica la gestión de tu restaurante o
          bar, con la tecnología más avanzada.
        </h1>
        <button className="btn">
          Contactarse <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
