
import {useState} from 'react';
const SignIn = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('')
 
 let object = {
     email:email,
     password:password,
    
 }
    let submit = (e)=>{
        e.preventDefault();
        console.log(object)
    }
    
    return ( <div>
        <h1 className='title'>Sign In</h1>
        <form className="signIn" onSubmit={submit}>
            <div className="inputField">
                <label htmlFor="email"></label>
                <input type="email" id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="inputField">
                <label htmlFor="password"></label>
                <input type="password" id='password' onChange={(e)=>{setPassword(e.target.value)}} />
            </div>

            <input type="submit" value='Sign In'/>
        </form>
    </div> );
}
 
export default SignIn;