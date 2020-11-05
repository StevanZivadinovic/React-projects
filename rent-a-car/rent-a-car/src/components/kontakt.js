import React from "react";
// import Footer from "./footer";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import fb from "./facebook.svg";
import './kontakt.css';

export default function Kontakt() {
  return (
    <div className="main3">
      <div className="contactDetails">
        <p>stevanzivadinovic@outlook.com</p>
        <p>061/321-60-87</p>
        <p>
          <a
            target="_blank"
            href="https://www.facebook.com/Pravoslavne-ikone-Nis-1691948927791453"
          >
            <img id="fb" src={fb}></img>
          </a>
        </p>
      </div>
      <div className="contactForm">
        <form>
          
          <div><span>Име</span><input type="text"></input>
          </div>
          <div><span>Име</span><input type="text"></input>
          </div>
          <div><span>Име</span><input type="text"></input>
          </div>

          
          
          
        </form>
      </div>

      {/* <div className="footer" id='footer1'>
        <Router>
          <Footer></Footer>
        </Router>
      </div> */}
    </div>
  );
}
