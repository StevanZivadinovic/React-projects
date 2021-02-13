import {Link} from 'react-router-dom'

const SignOutLinks = () => {
    return ( <div className="navbarSignOut">
        <nav className='SignOutNav'>
            <Link to='/'>Signup</Link>
            <Link to='/'>Login</Link>
           
        </nav>
    </div> );
}
 
export default SignOutLinks;