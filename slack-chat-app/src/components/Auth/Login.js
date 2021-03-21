//npm install --save react-gravatar
//npm install md5


import puzzle from "./../../img/puzzle.svg";
import Firebase from './../../config'
import { Link } from "react-router-dom";
import { useState } from "react";
// import md5 from 'md5';


// import { findAllByTestId } from "@testing-library/dom";

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading]=useState('');
  
  

//   let handleChangeUsername = (e) => {
//     setUsername(e.target.value);
//   };
  let handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
//   let handleChangePasswordRepeat = (e) => {
//     setPasswordRepeat(e.target.value);
//   };

// let isFormEmpty = (username, email, password, passwordRepeat)=>{
//     if(!username || !email || !password || !passwordRepeat){
//       console.log('err')
//       setError('You must fill all fields!')
//         return false;
//     }else{
//         return true;
//     }
// }
// let isPasswordCorect = (password, passwordRepeat)=>{
//     if(password.length<6 || passwordRepeat.length<6){
//         console.log('err');
//         setError('Password length must be min 6 characters!')

//         return false;
//     }else if(password!==passwordRepeat){
//         console.log('err');
//         setError('Password are not equal!')

//         return false;
//     }else{
//         return true;
//     }
// }


// let formValidation = e=>{
//     if(!isFormEmpty(username, email, password, passwordRepeat)){
//         console.log('a')
//         return false;
//     }else if(!isPasswordCorect(password, passwordRepeat)){
//         console.log('ab')
//         return false;
//     }else{
//         return true;
//     }
// }

let handleSubmit = e=>{
    e.preventDefault();
    
    // if(formValidation()){
    //   setError('');
    //   setLoading(true);
    
    //     }
        
}
console.log(error)
let handleClass = (error, inputWord)=>{
  if(error){
    console.log(error)
    return error.toLowerCase().includes(inputWord)?
    'error1':'';
  }
}

  return (
    <div className="mainRegister">
      <div className="headerForm">
        <img src={puzzle} alt="puzzle" style={{ width: 100 }} />
        <h1>Register for DevChat</h1>
      </div>
      <div className="forma login">
        {/* <input
          onChange={handleChangeUsername}
          id="username"
          type="text"
          className={ handleClass(error, 'username')}
          placeholder="Username"
        /> */}
        <input
          onChange={handleChangeEmail}
          id="email"
          type="email"
          className={handleClass(error, 'email')}
          placeholder="EmailAddress"
        />
        <input
          onChange={handleChangePassword}
          id="password"
          type="password"
          className={handleClass(error, 'password')}
          placeholder="Password"
        />
        {/* <input
          onChange={handleChangePasswordRepeat}
          id="passwordRepeat"
          type="password"
          className={handleClass(error, 'password')}
          placeholder="PasswordRepeat"
        /> */}
        
         <button className={loading ? 'loading' : ''}  disabled={loading} onClick={handleClass} onClick={handleSubmit}>Submit</button>
      </div>
        {error && <p className='error'>{error}</p>}
      <div className="message">
        Don't have an account? <Link to="/login">Register</Link>
      </div>
    </div>
  );
};

export default Login;
