import { Link } from "react-router-dom"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to={"/"} style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">My booking</span>
        </Link>
        <div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar
