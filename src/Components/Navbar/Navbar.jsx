import React from "react";
import "./Navbar.css";
import logo from '../../assets/mev_logo.png'

const Navbar = () => {
  return (
    <div className="header">
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
     
        <a href="/">Inicio</a>
        <a href="/">Sobre Mev</a>
        <a href="/">Contacto</a>
        <a href="/">Iniciar sesión</a>
        <a href="/">Idiomas</a>
      </nav>
      </div>
  );
};

export default Navbar;
