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
        <button class="mt-8 group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-xl shadow">
          <div class="absolute inset-0 w-4 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span class="relative text-blue-400 group-hover:text-white">
            Registrarme!
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
