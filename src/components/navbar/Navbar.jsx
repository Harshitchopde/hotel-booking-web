import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className="logo">My booking</span>
        <div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
   
    </div>
  )
}

export default Navbar
