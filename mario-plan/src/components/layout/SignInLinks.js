import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from './../../store/reducers/actions/authActions';
import { getFirestore, reduxFirestore } from "redux-firestore";
// import { getFirebase,reactReduxFirebase } from "react-redux-firebase";
import {useState} from 'react'
const SignInLinks = (props) => {
    // let userDb = getFirebase();
    let db = getFirestore();
    const [podaci, setPodaci] = useState(null)

     db.collection('user').doc(props.auth.uid).get()
         .then((data)=>{
             if(data.data()){
                 setPodaci(data.data());
             }
         })


   return ( <div className="navbarSignIn">
                <nav className='SignInNav'>
                <Link to='/create'>New Project</Link>
                <Link onClick={props.signOut}>Log Out</Link>
              {podaci && <Link to='/' className='pinkCircleLink'>{ podaci.initials}</Link>}  
               
            </nav>
</div> )
   
    
}
let mapStateToProps = (state)=>{
    // console.log(state);
    return{
        auth:state.firebase.auth
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        signOut:()=>{dispatch(signOut())}
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks);