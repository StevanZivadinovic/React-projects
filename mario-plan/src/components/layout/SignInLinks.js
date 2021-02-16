import {Link} from 'react-router-dom'

const SignInLinks = () => {
    return ( <div className="navbarSignIn">
        <nav className='SignInNav'>
            <Link to='/create'>New Project</Link>
            <Link to='/'>Log Out</Link>
            <Link to='/' className='pinkCircleLink'>NN</Link>
        </nav>
    </div> );
}
 
export default SignInLinks;