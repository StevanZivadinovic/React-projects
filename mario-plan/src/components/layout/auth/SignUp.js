
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
const SignUp = (props) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('')
 let object = {
     email:email,
     password:password,
     firstName:firstName,
     lastName:lastName
 }
    let submit = (e)=>{
        e.preventDefault();
        console.log(object)
    }
    if(props.auth.uid){
        return <Redirect to='/'/>
    }
    return ( <div>
        <h1 className='title'>Sign Up</h1>
        <form className="signIn" onSubmit={submit}>
            <div className="inputField">
                <label htmlFor="email"></label>
                <input type="email" id='email' onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="inputField">
                <label htmlFor="password"></label>
                <input type="password" id='password' onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className="inputField">
                <label htmlFor="FirstName"></label>
                <input type="text" id='FirstName' onChange={(e)=>{setFirstName(e.target.value)}} />
            </div>
            <div className="inputField">
                <label htmlFor="LastName"></label>
                <input type="text" id='LastName' onChange={(e)=>{setLastName(e.target.value)}} />
            </div>

            <input type="submit" value='Sign Up'/>
        </form>
    </div> );
}
let mapStateToProps = (state)=>{
    return{
        auth:state.firebase.auth
    }
}
 
export default connect(mapStateToProps)(SignUp);