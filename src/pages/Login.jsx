import { useNavigate } from 'react-router-dom'
import '../styles/auth.css'

function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // fake auth
    navigate('/user/dashboard')
  }

  return (
    <div className="auth">
      <h2>Login</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
