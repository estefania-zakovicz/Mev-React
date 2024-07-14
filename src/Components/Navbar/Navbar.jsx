import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/mev_logo.png";
import menu_icon from '../../assets/menu-icon.png'
import { Link, ScrollLink } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu (true)

  }

  return (
    <div className="header">
      <nav className={`navbar ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="logo" className="logo" />
        <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="benefits_1" smooth={true} offset={0} duration={500}>
              Sobre Mev
            </Link>
          </li>
          <li>
            <Link to="sistem" smooth={true} offset={-260} duration={500}>
              Sistema
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contacto
            </Link>
          </li>
          <li>Iniciar sesión</li>
          <li>Idiomas</li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
