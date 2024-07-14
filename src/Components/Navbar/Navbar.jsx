import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from '../../assets/mev_logo.png'

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
     
        <a href="/">Inicio</a>
        <a href="/">Sobre Mev</a>
        <a href="/">Sistema</a>
        <a href="/">Contacto</a>
        <a href="/">Iniciar sesión</a>
        <a href="/">Idiomas</a>
      </nav>
      </div>
  );
};

export default Navbar;
