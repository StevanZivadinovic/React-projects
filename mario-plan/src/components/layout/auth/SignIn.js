
import {useState} from 'react';
import {connect} from 'react-redux';
import {signIn} from './../../../store/reducers/actions/authActions';
import {Redirect} from 'react-router-dom';
const SignIn = (props) => {
    console.log(props);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('')
 
 let object = {
     email:email,
     password:password,
    
 }
 let style = {
     width:'200px',
     margin:'0 auto',
     textAlign:'center'
 }
    let submit = (e)=>{
        e.preventDefault();
        props.signIn(object)
    }

    if(props.auth.uid){
        return <Redirect to='/'/>
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
        {props.authError && <p className='error' style={style}>{props.authError}</p>}
    </div> );
}

let mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError,//auth properti iz rootReducers.js
        auth:state.firebase.auth
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        signIn:(credentials)=>dispatch(signIn(credentials))
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);