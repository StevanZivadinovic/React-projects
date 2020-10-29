import React from "react";
import "./Home.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div className="main">
      <h1>Израда Православних икона</h1>
      <div className="sazetak"></div>
      <div className="opis">
        <div className="liste">
          <ul className="lista">
            <li>
              <a href="#vizantijskiStil">Византијски стил</a>
            </li>
            <li>
              <a href="#daska">Традиционално обрађена липова даска</a>
            </li>
            {/* <animateScroll>
              <Link
                
                // to=".vizantijskiStil"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
               
              </Link>
            </animateScroll> */}
          </ul>
        </div>
        <div className="liste">
          <ul className="lista">
            <li>
              <a href="#">Техника израде - јајчана темпера</a>
            </li>
            <li>
              <a href="#">Израда икона са златом или шлаг металом</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="vizantijskiStil">
        <h2>Византијски стил</h2>
      </div>
      <div id="daska">
        <h2>Традиционално обрађена липова даска</h2>
      </div>
    </div>
  );
}
