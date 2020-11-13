import React, { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
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
    alert("Порука је послата!");
  }

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_vqyu154', 'template_pasc3rj', e.target, 'user_iDF7GBVBepZlv2bZg187d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });//ova funkcija je kopirana sa njihovog sajta

      e.target.reset();
  }

  //npm install emailjs-com --save, ovo mora da se instalira da bi EmailJS dodatak radio
  return (
    <div className="main3">
      <form className="wrapper" onSubmit={sendEmail}>
        <div className="title">
          <h1>Контактирајте нас!</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input type="text" className="input" placeholder="Name" name='from_name'></input>
            <input
              type="text"
              className="input"
              placeholder="Email Address"
            ></input>
            <input type="text" className="input" placeholder="Phone" name='phone'></input>
            <input type="text" className="input" placeholder="Subject" name='subjekt'></input>
          </div>
          <div className="msg">
            <textarea placeholder="Message" name='message'></textarea>
            <input type='submit' className="btn" value='send' onClick={onClickHandle}></input>
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
      </form>
    </div>
  );
}
