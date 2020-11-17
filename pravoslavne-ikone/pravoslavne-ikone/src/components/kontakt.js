import React, { useState } from "react";
import emailjs from "emailjs-com";

import fb from "./facebook.svg";
import "./kontakt.css";
import { useForm } from "react-hook-form";

export default function Kontakt() {
  const [status, setStatus] = useState(false);

  function onClickHandle() {
    alert("Порука је послата!");
  }

  function onClickHandle1() {
    alert("Емаил је неисправан!");
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqyu154",
        "template_pasc3rj",
        e.target,
        "user_iDF7GBVBepZlv2bZg187d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      ); //ova funkcija je kopirana sa njihovog sajta

    e.target.reset();
  }

  //npm install emailjs-com --save, ovo mora da se instalira da bi EmailJS dodatak radio

  //
  let validationInputTextarea = (e) => {
    var pattern = /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
    let a = pattern.test(e.target.value);
    console.log(a);
    setStatus(false);

    if (a) {
      e.target.style.borderColor = "blue";
      setStatus(true);
    }
    else{
      e.target.style.borderColor = "red";
      setStatus(false);

    }
    }
  let validationInputPhone = (e) => {
    var pattern = /^[\s0-9-]+$/;
    let a = pattern.test(e.target.value);
    console.log(a);
    setStatus(false);

    if (a) {
      e.target.style.borderColor = "blue";
      setStatus(true);
    }
    else{
      e.target.style.borderColor = "red";
      setStatus(false);

    }
    }

  let validationInput = (e) => {
    var pattern = /^[\s0-9-,.AБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШабвгдђежзијклљмнњопрстћуфхцчџшA-Za-zA-Ša-š:/.!?]+$/;
    let a = pattern.test(e.target.value);
    console.log(a);
    setStatus(false);


    if (a) {
      e.target.style.borderColor = "blue";
      setStatus(true);
    }
    else{
      e.target.style.borderColor = "red";
      setStatus(false);

    }
    }

  let validation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let a = pattern.test(e.target.value);
    console.log(a);

    if (a) {
      e.target.style.borderColor = "blue";
      let dugme = (document.querySelector(
        'input[type="submit"]'
      ).disabled = false);
      // dugme.style.cursor = 'pointer'
      setStatus(true);
      // dugme.innerText = 'email je dobar'
      let label = document.querySelector("label");
      label.style.display = "none";
    } else {
      e.target.style.borderColor = "red";
      let dugme = (document.querySelector(
        'input[type="submit"]'
      ).disabled = true);
      let dugme1 = document.querySelector('input[type="submit"]');
      let label = document.querySelector("label");
      label.style.position = "absolute";
      label.style.top = "110px";
      label.style.right = "0px";
      label.style.fontSize = "14px";
      label.style.display = "inline";
      label.style.color = "red";

      label.style.opacity = 1;

      setStatus(false);

      let node = document.createTextNode("Hello, I am Arun");
      console.log(node);
      dugme1.appendChild(node);
    }
    console.log(status);
  };

  return (
    <div className="main3">
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form className="wrapper" onSubmit={sendEmail}>
        <div className="title">
          <h1>Контактирајте нас!</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input
            onKeyUp={validationInput}
              type="text"
              className="input"
              placeholder="Name"
              name="from_name"
              required
            ></input>
            <label htmlFor="email">Неисправан унос</label>
            <input
              onKeyUp={validation}
              name="email"
              id="email"
              type="email"
              className="input"
              placeholder="Email Address"
              required
            ></input>

            <input
              onKeyUp={validationInputPhone}

              type="text"
              className="input"
              placeholder="Phone"
              name="phone"
              required
            ></input>
            <input
              onKeyUp={validationInput}

              type="text"
              className="input"
              placeholder="Subject"
              name="subjekt"
              required
            ></input>
          </div>
          <div className="msg">
            <textarea  onKeyUp={validationInputTextarea}
            placeholder="Message" name="message"></textarea>
            <input
              onClick={status ? onClickHandle : onClickHandle1}
              onSubmit={validation}
              type="submit"
              className="btn"
              value="send"
              required
            ></input>
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
