import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useNavigate, Link } from "react-router-dom"
import "./Register.css"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await updateProfile(userCredential.user, {
        displayName: name,
      })
      navigate("/")
    } catch (error) {
      console.error(error)
      alert("Registration failed: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>

        <form onSubmit={handleRegister} className="register-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
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
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="register-footer">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  )
}
