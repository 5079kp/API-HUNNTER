import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"
import "./Login.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    gsap.from(".login-card", {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (error) {
      console.error(error)
      alert("Login failed: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  )
}
