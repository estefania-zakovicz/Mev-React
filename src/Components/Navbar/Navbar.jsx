import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from '../../assets/mev_logo.png'
import { Link } from "react-scroll";

const Navbar = () => {

const [sticky, setSticky] = useState (false)

useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 500 ? setSticky(true) : setSticky(false);
  })
},[]);

  return (
    <div className="header">
    <nav className={`navbar ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" className="logo"/>
        <ul>
          <li><Link to="home" smooth={true} offset={0} duration={500}>Inicio</Link></li>
          <li><Link to="sobreMev" smooth={true} offset={0} duration={500}>Sobre Mev</Link></li>
          <li><Link to="Sistema" smooth={true} offset={0} duration={500}>Sistema</Link></li>
          <li><Link to="Contacto" smooth={true} offset={0} duration={500}>Contacto</Link></li>
          <li>Iniciar sesión</li>
          <li>Idiomas</li>
        </ul>
      </nav>
      </div>
  );
};

export default Navbar;
