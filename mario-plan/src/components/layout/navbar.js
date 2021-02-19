import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks';
import {connect} from 'react-redux';
const Navbar = (props) => {
    console.log(props.auth.uid);

    let links = props.auth.uid ? <SignInLinks/>: <SignOutLinks/>;
    return ( <div className="navbar">
        <nav>
            <Link to='/'>MarioPlan</Link>
            <div className="main">
            {links}
            </div>
            
        </nav>
    </div> );
}

let mapStateToProps = (state)=>{
    console.log(state);
    return{
        auth:state.firebase.auth
    }
}
 
export default connect(mapStateToProps)(Navbar);
