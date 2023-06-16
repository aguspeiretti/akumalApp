import React, { useState } from "react";
import "../styles/navBar.css";
import logo from "../img/logoAku.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logoInsta from "../img/logoInsta.svg";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="navBar">
      <div className="navBarContainer">
        <ul>
          <img src={logo} alt="" />
          <Link to={"/"}>
            {" "}
            <li>Home</li>
          </Link>
          <li>Nosotros</li>
          <li>Contato</li>
          <div className="social">
            <img className="insta" src={logoInsta} alt="" />
          </div>
        </ul>
      </div>
      <div className="navBarContainerResponsive">
        <ul>
          <img src={logo} alt="" />
          <div onClick={toggle} className="toggleContainer">
            {open ? (
              <FontAwesomeIcon
                onClick={toggle}
                icon={faBars}
                style={{ color: "#ffffff" }}
              />
            ) : (
              <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
            )}
          </div>
          <div className={!open ? "menuContainer" : "menuContainerClose"}>
            <ul>
              <div className="profileImg"></div>
              <Link to={"/"}>
                {" "}
                <li onClick={toggle}>Home</li>
              </Link>
              <li>Sobre Nosotros</li>
              <li>Contato</li>
              <div className="log">
                <p>LogIn</p>
                <p>LogOut</p>
              </div>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
