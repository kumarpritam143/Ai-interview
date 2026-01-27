import { NavLink, useNavigate } from 'react-router-dom'
import './sidebar.css'

function Sidebar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login')
  }

  return (
    <aside className="sidebar">
      {/* Logo / Brand */}
      <div className="sidebar-brand">
        <span className="logo">🤖</span>
        <h3>Interview AI</h3>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <NavLink to="/user/dashboard" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/user/open" className="nav-item">
          Dashboard
        </NavLink>

        <NavLink to="/user/interview" className="nav-item">
          Interview with AI
        </NavLink>

        <NavLink to="/user/jobs" className="nav-item">
          Jobs
        </NavLink>

        {/* NEW SECTIONS */}
        <NavLink to="/user/aptitude" className="nav-item">
          Aptitude Practice
        </NavLink>

        <NavLink to="/user/ide" className="nav-item">
          Live Coding IDE
        </NavLink>

        <NavLink to="/user/insights" className="nav-item">
          AI Insights
        </NavLink>

        <NavLink to="/user/resume" className="nav-item">
          Resume Analyzer
        </NavLink>

        <NavLink to="/user/settings" className="nav-item">
          Settings
        </NavLink>
      </nav>

      {/* Logout */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  )
}

export default Sidebar
