import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  )

  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const toggleNotifications = () => {
    setShowNotifications(prev => !prev)
  }

  const goToProfile = () => {
    navigate('/user/profile')
  }

  return (
    <header className="navbar">
      <h4 className="navbar-title">User Panel</h4>

      <div className="navbar-actions">
        {/* Theme Toggle */}
        {/* <button
          className="theme-toggle"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button> */}

        {/* Notification */}
        <div className="notification-wrapper">
          <span className="icon" onClick={toggleNotifications}>
            🔔
          </span>

          {showNotifications && (
            <div className="notification-dropdown">
              <p className="notification-title">Notifications</p>
              <div className="notification-item">
                Interview scheduled for tomorrow
              </div>
              <div className="notification-item">
                New AI feedback available
              </div>
              <div className="notification-item muted">
                No more notifications
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <span
          className="icon profile-icon"
          onClick={goToProfile}
          title="Profile"
        >
          👤
        </span>
      </div>
    </header>
  )
}

export default Navbar
