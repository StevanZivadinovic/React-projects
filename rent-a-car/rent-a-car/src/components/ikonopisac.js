import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./ikonpisac.css";
import Footer from "./footer";
import majka from './majka.jpg'

export default function Ikonopisac() {
  return (
    <div className="mainM">
      <div className="main1">
        <img id='majka' src={majka}></img>
        <div className="textIkonopisac">
            <p>Драгана Живадиновић рођена је у Зајечару 1973. године. Основну школу
          завршила је у родном граду, након чега уписује средњу грађевинску
          школу у Нишу коју завршава 1992. године као ђак генерације.</p>
          


          <p>Њено занимање за иконопис почиње још у средњошколским данима. Озбиљно се
          посвећује иконопису почетком 2003. године. Од тада до данас
          иконописала је више од 350 икона које се налазе широм Србије и српске
          дијаспоре широм света. Ради по благослову свог духовног оца. Мајка је
          четворо деце.</p>
           
        </div>
      </div>

      <div className="footer">
        <Router>
          <Footer></Footer>
        </Router>
      </div>
    </div>
  );
}
