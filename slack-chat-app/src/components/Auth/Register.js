import puzzle from './../../img/puzzle.svg';
// import username from './../../img/username.svg';



const Register = () => {
    return ( <div >
        <div className='headerForm'>
        <img src={puzzle} alt='puzzle' style={{width:100}}/>
        <h1>Register for DevChat</h1>
        </div>
        <div className="forma">
            <input id='username' type="text" className="username" placeholder='Username'/>
            <input id='email' type="email" className="email" placeholder='EmailAddress'/>
            <input id='password' type="password" className="password" placeholder='Password'/>
            <input id='passwordRepeat' type="password" className="passwordRepeat" placeholder='PasswordRepeat'/>

        <button>Submit</button>
        </div>
    </div> );
}
 
export default Register;