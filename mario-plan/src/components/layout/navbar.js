import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks';
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
 
export default Navbar;
