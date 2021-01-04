//sfc - statles functional component
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dodjo-app</h1>
      <div className="links" >
        <a href="/" style={{
           color:'green',
           backgroundColor:'red'
        }}>Home</a>
        <a href="/create" style={{
           color:'green',
           backgroundColor:'red'
        }}>New blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
