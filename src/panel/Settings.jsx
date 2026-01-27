import { useState } from "react"

function Settings() {
  const [theme, setTheme] = useState("Light")

  return (
    <div className="page settings-page">
      <h2 className="page-title">Settings</h2>
      <p className="page-subtitle">
        Manage your interview preferences, AI behavior, and account settings.
      </p>

      {/* GRID SECTION */}
      <div className="settings-grid">

        {/* INTERVIEW */}
        <div className="card settings-card">
          <h3 className="card-title">Interview Preferences</h3>

          <div className="form-group">
            <label className="form-label">Interview Difficulty</label>
            <select className="form-select">
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Interview Type</label>
            <select className="form-select">
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>
          </div>
        </div>

        {/* AI */}
        <div className="card settings-card">
          <h3 className="card-title">AI Behavior</h3>

          <div className="toggle-row">
            <span>Follow-up Questions</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Real-time Feedback</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Strict Mode</span>
            <input type="checkbox" />
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="card settings-card">
          <h3 className="card-title">Notifications</h3>

          <div className="toggle-row">
            <span>Email Alerts</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Interview Reminders</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>

        {/* APPEARANCE */}
        <div className="card settings-card">
          <h3 className="card-title">Appearance</h3>

          <div className="form-group">
            <label className="form-label">Theme</label>
            <select
              className="form-select"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>

          <div className="toggle-row">
            <span>Enable Animations</span>
            <input type="checkbox" defaultChecked />
          </div>
        </div>
      </div>

      {/* ACCOUNT – FULL WIDTH */}
      <div className="card settings-card danger-zone">
        <h3 className="card-title">Account & Privacy</h3>

        <div className="form-group">
          <label className="form-label">Change Password</label>
          <input
            type="password"
            className="form-select"
            placeholder="New password"
          />
        </div>

        <div className="toggle-row">
          <span>Private Profile</span>
          <input type="checkbox" />
        </div>

        <button className="danger-btn">Delete Account</button>
      </div>

      {/* SAVE */}
      <div className="settings-footer">
        <button className="primary-btn">Save All Settings</button>
      </div>
    </div>
  )
}

export default Settings
