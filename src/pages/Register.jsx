import { useNavigate } from 'react-router-dom'
import '../styles/auth.css'

function Register() {
  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/user/dashboard')
  }

  return (
    <div className="auth">
      <h2>Register</h2>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleRegister}>Create Account</button>
    </div>
  )
}

export default Register
