import React, { useEffect, useRef } from "react";
// import Footer from "./footer";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import fb from "./facebook.svg";
import "./kontakt.css";

export default function Kontakt() {
  let a = document.getElementById('porukaInput');

  function setCaretPosition(ctrl, pos) {
    // For Most Web Browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    // IE8 and below
    } 
  }


  const nameRef = useRef();
  const emailRef = useRef();
  const porukaRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function keyPressHandle(e) {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        emailRef.current.focus();
      }
      if (e.target.id === "emailInput") {
        porukaRef.current.focus();
        let a = document.querySelector('#porukaInput');
        
      }
      
    }
  }

  function onClickHandle() {
    alert("submitted");
  }

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
        <div className="form-field">
          <span>Име</span>
          <input
            ref={nameRef}
            id="nameInput"
            type="text"
            onKeyDown={keyPressHandle}
          />
        </div>
        <div className="form-field">
          <span>Email</span>
          <input
            ref={emailRef}
            id="emailInput"
            type="email"
            onKeyDown={keyPressHandle}
          />
        </div>
        <div className="form-field">
          <span>Порука</span>
          <textarea
            ref={porukaRef}
            id="porukaInput"
            onKeyDown={keyPressHandle}
            onClick={setCaretPosition}
          />
        </div>
        <button
          onClick={onClickHandle}
          ref={submitRef}
          id="submitButton"
          onKeyDown={keyPressHandle}
        >
          Submit
        </button>
      </div>

      {/* <div className="footer" id='footer1'>
        <Router>
          <Footer></Footer>
        </Router>
      </div> */}
    </div>
  );
}
