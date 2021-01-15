import {Link} from 'react-router-dom'

//sfc - statles functional component
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dodjo-app</h1>
      <div className="links" >
        <Link  to="/" style={{
           color:'green',
           backgroundColor:'red'
        }}>Home</Link>
        <Link to="/create" style={{
           color:'green',
           backgroundColor:'red'
        }}>New blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
