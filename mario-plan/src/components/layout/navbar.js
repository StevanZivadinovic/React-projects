import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks';
import {connect} from 'react-redux';
const Navbar = () => {
    return ( <div className="navbar">
        <nav>
            <Link to='/'>MarioPlan</Link>
            <div className="main">
            <SignInLinks></SignInLinks>
            <SignOutLinks></SignOutLinks>
            </div>
            
        </nav>
    </div> );
}

let mapStateToProps = (state)=>{
    console.log(state);
    return{

    }
}
 
export default connect(mapStateToProps)(Navbar);
