import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from './../../store/reducers/actions/authActions';

const SignInLinks = (props) => {
    console.log(props.signOut);
    return ( <div className="navbarSignIn">
        <nav className='SignInNav'>
            <Link to='/create'>New Project</Link>
            <Link onClick={props.signOut}>Log Out</Link>
            <Link to='/' className='pinkCircleLink'>NN</Link>
        </nav>
    </div> );
}

let mapDispatchToProps = (dispatch)=>{
    return{
        signOut:()=>{dispatch(signOut())}
    }
}
 
export default connect(null, mapDispatchToProps)(SignInLinks);