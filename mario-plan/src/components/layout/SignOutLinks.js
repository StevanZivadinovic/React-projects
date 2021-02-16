import {Link} from 'react-router-dom';

const SignOutLinks = () => {
    return ( <div className="navbarSignOut">
        <nav className='SignOutNav'>
            <Link to='/signup'>Signup</Link>
            <Link to='/signin'>Login</Link>
           
        </nav>
    </div> );
}
 
export default SignOutLinks;