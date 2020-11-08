import React, { useEffect, useRef } from "react";
// import Footer from "./footer";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import fb from "./facebook.svg";
import "./kontakt.css";

export default function Kontakt() {
  let a = document.getElementById("porukaInput");

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

  // useEffect(() => {
  //   nameRef.current.focus();
  // }, []);

  // function keyPressHandle(e) {
  //   if (e.keyCode === 13) {
  //     if (e.target.id === "nameInput") {
  //       emailRef.current.focus();
  //     }
  //     if (e.target.id === "emailInput") {
  //       porukaRef.current.focus();
  //       let a = document.querySelector('#porukaInput');

  //     }

  //   }
  // }

  function onClickHandle() {
    alert("submitted");
  }

  return (
    <div className="main3">
      <div className="wrapper">
        <div className="title">
          <h1>контакт форма</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input type="text" class="input" placeholder="Name"></input>
            <input
              type="text"
              class="input"
              placeholder="Email Address"
            ></input>
            <input type="text" class="input" placeholder="Phone"></input>
            <input type="text" class="input" placeholder="Subject"></input>
          </div>
          <div className="msg">
            <textarea placeholder="Message"></textarea>
            <div className="btn">send</div>
          </div>
        </div>
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
      </div>
    </div>
  );
}
