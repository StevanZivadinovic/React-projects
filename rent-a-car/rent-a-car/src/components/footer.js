import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import "./footer.css";
import krst from "./1.png";
import fb from './facebook.svg';

export default function Footer(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar1">
        <div className="navbar-container1">
            <div> <Link to="/" className="navbar-logo1" onClick={closeMobileMenu}>
            Православне иконе - Ниш
            <i className="fab fa-typo3" />
          </Link></div>
         
          <div>
            <p>stevanzivadinovic@outlook.com</p>
            <p>061/321-60-87</p>
            <a target='_blank' href='https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453'><img id='fb' src={fb}></img></a>
          </div>
        </div>
      </nav>
    </>
  );
}
