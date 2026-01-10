import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

export default function Navbar() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-3">
      <Link className="navbar-brand" to="/">
        🎬 MovieLibrary
      </Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Popular
        </Link>
        <Link className="nav-link" to="/search">
          Search
        </Link>

        {!user ? (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        ) : (
          <button
            className="btn btn-danger btn-sm ms-2"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}
