import { Link, NavLink } from "react-router-dom"
import "./Navbe.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <h1 className="navbar-logo">LibraryApp</h1>

        {/* LINKS */}
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Add Book
          </NavLink>

          {/* LOGIN BUTTON */}
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>

      </div>
    </nav>
  )
}
