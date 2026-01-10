import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!name || !email) return alert("Fill all fields")

    dispatch({
      type: "LOGIN",
      payload: { name, email },
    })

    navigate("/")
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h3 className="text-center mb-3">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleSubmit}
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p
          className="text-center mt-3 toggle-text"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "New user? Create account"}
        </p>
      </div>
    </div>
  )
}
