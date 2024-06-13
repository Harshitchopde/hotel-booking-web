import { Link } from "react-router-dom"
import "./navbar.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const {user}= useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to={"/"} style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">My booking</span>
        </Link>
        {user?.username ?<h1 className="username">{user.username}</h1>:<div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>}
      </div>

    </div>
  )
}

export default Navbar
