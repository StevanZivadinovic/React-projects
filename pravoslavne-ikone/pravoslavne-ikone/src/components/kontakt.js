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
  


  let validation = (e) => {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let a = pattern.test(e.target.value);
    console.log(a);

    if (a) {
      e.target.style.borderColor = "blue";
     let dugme = document.querySelector('input[type="submit"]').disabled=false;
      // dugme.style.cursor = 'pointer'
      setStatus(true);
      // dugme.innerText = 'email je dobar'
    } else {
      e.target.style.borderColor = "red";
      let dugme = document.querySelector('input[type="submit"]').disabled = true;
      let dugme1 = document.querySelector('input[type="submit"]');
      // dugme.style.cursor = 'not-allowed';
      setStatus(false);
      

      // dugme1.setAttribut('class', 'losInput');

     
    }
     console.log(status);
    }
    
  
  return (
    <div className="main3">
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form className="wrapper" onSubmit={sendEmail} >
        <div className="title">
          <h1>Контактирајте нас!</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input
             
              type="text"
              className="input"
              placeholder="Name"
              name="from_name"
            ></input>
            <input
             
              onKeyUp={validation}
              name='email'
              id="email"
              type="email"
              className="input"
              placeholder="Email Address"
            ></input>
          
            <input
             
              type="text"
              className="input"
              placeholder="Phone"
              name="phone"
            ></input>
            <input
             
              type="text"
              className="input"
              placeholder="Subject"
              name="subjekt"
            ></input>
          </div>
          <div className="msg">
            <textarea placeholder="Message" name="message"></textarea>
            <input
              onClick={status ? onClickHandle : onClickHandle1 }
              type="submit"
              className="btn"
              value="send"


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
