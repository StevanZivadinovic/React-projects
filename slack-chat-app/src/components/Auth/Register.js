import puzzle from "./../../img/puzzle.svg";
import firebase from './../../config'
import { Link } from "react-router-dom";
import { useState } from "react";
import { findAllByTestId } from "@testing-library/dom";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  let handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  let handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  let handleChangePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value);
  };
//   let data = {
//     username: username,
//     email: email,
//     password: password,
//     passwordRepeat: passwordRepeat,
//   };
let isFormEmpty = (username, email, password, passwordRepeat)=>{
    if(!username || !email || !password || !passwordRepeat){
      console.log('err')
        return false;
    }else{
        return true;
    }
}
let isPasswordCorect = (password, passwordRepeat)=>{
    if(password.length<6 || passwordRepeat.length<6){
        console.log('err')
        return false;
    }else if(password!==passwordRepeat){
        console.log('err')
        return false;
    }else{
        return true;
    }
}


let formValidation = e=>{
    if(!isFormEmpty(username, email, password, passwordRepeat)){
        console.log('a')
        return false;
    }else if(!isPasswordCorect(password, passwordRepeat)){
        console.log('ab')
        return false;
    }else{
        return true;
    }
}

let handleSubmit = e=>{
    e.preventDefault();
    console.log(formValidation());
    if(formValidation()){

        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data=>{
            console.log(data);
        })
    }else{
        console.log('error')
    }
}
  return (
    <div className="mainRegister">
      <div className="headerForm">
        <img src={puzzle} alt="puzzle" style={{ width: 100 }} />
        <h1>Register for DevChat</h1>
      </div>
      <div className="forma">
        <input
          onChange={handleChangeUsername}
          id="username"
          type="text"
          className="username"
          placeholder="Username"
        />
        <input
          onChange={handleChangeEmail}
          id="email"
          type="email"
          className="email"
          placeholder="EmailAddress"
        />
        <input
          onChange={handleChangePassword}
          id="password"
          type="password"
          className="password"
          placeholder="Password"
        />
        <input
          onChange={handleChangePasswordRepeat}
          id="passwordRepeat"
          type="password"
          className="passwordRepeat"
          placeholder="PasswordRepeat"
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="message">
        Alredy a user? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
