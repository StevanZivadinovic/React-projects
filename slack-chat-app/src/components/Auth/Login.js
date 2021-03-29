//npm install --save react-gravatar
//npm install md5


import puzzleLogin from "./../../img/puzzleLogin.svg";
import Firebase from './../../config'
import { Link } from "react-router-dom";
import { useState } from "react";
// import md5 from 'md5';


// import { findAllByTestId } from "@testing-library/dom";

const Login = () => {
  console.log(Firebase)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading]=useState('');
  
  


  let handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let handleChangePassword = (e) => {
    setPassword(e.target.value);
  };


let isFormEmpty = ( email, password)=>{
    if( !email || !password ){
      console.log('err')
      setError('You must fill all fields!')
        return false;
    }else{
        return true;
    }
}



let formValidation = e=>{
    if(!isFormEmpty( email, password)){
        console.log('a')
        return false;
    }
    else{
        return true;
    }
}

let handleSubmit = e=>{
    e.preventDefault();
    
    if(formValidation()){
      setError('');
      setLoading(true);
      
      Firebase.default
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(signInUser=>{
        console.log(signInUser)
      })
      .catch(err=>{
        setError(err)
        setLoading(false)
      })
        }else{
          console.log('error')
        }
        
}
console.log(error)
let handleClass = (error, inputWord)=>{
  if(error.message){
    console.log(error.message)
    return error.message.toLowerCase().includes(inputWord)?
    'error1':'';
  }
}

  return (
    <div className="mainRegister">
      <div className="headerForm">
        <img className='imgLogin' src={puzzleLogin} alt="puzzle" style={{ width: 100 }} />
        <h1 className='h1Login'>Register for DevChat</h1>
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
        
         <button id='buttonLogin' className={loading ? 'loading' : ''}  disabled={loading} onClick={handleClass} onClick={handleSubmit}>Submit</button>
      </div>
        {error && <p className='error'>{error.message}</p>}
      <div className="message">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
