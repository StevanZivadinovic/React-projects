import puzzle from './../../img/puzzle.svg';
import {Link} from 'react-router-dom';


const Register = () => {
    let handleChange=()=>{
        console.log('haj')
    }
    return ( <div className='mainRegister' >
        <div className='headerForm'>
        <img src={puzzle} alt='puzzle' style={{width:100}}/>
        <h1>Register for DevChat</h1>
        </div>
        <div className="forma">
            <input onChange={handleChange} id='username' type="text" className="username" placeholder='Username'/>
            <input onChange={handleChange} id='email' type="email" className="email" placeholder='EmailAddress'/>
            <input onChange={handleChange} id='password' type="password" className="password" placeholder='Password'/>
            <input onChange={handleChange} id='passwordRepeat' type="password" className="passwordRepeat" placeholder='PasswordRepeat'/>

        <button>Submit</button>
        </div>
        <div className="message">Alredy a user? <Link to='/login'>Login</Link></div>
    </div> );
}
 
export default Register;