function Profile() {
  // fake logged-in user data (future me API se aayega)
  const user = {
    name: "Pritam Kumar Das",
    email: "pritam@gmail.com",
    role: "Frontend Engineer Aspirant",
    joined: "January 2026",
    coins: 420,
    coupons: 3,
    globalRank: 1842,
    interviewsGiven: 12,
    streak: 5
  }

  return (
    <div className="page profile-page">
      <h2 className="page-title">My Profile</h2>
      <p className="page-subtitle">
        Your personal stats, rewards, and interview journey.
      </p>

      {/* TOP PROFILE CARD */}
      <div className="card profile-header">
        <div className="profile-avatar">
          <span>👤</span>
        </div>

        <div className="profile-info">
          <h3>{user.name}</h3>
          <p className="muted">{user.email}</p>
          <span className="role-tag">{user.role}</span>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="profile-stats-grid">
        <div className="card stat-card">
          <h3>🧠 {user.interviewsGiven}</h3>
          <p>AI Interviews Given</p>
        </div>

        <div className="card stat-card">
          <h3>🔥 {user.streak} Days</h3>
          <p>Active Interview Streak</p>
        </div>

        <div className="card stat-card">
          <h3>🪙 {user.coins}</h3>
          <p>Interview Coins</p>
        </div>

        <div className="card stat-card">
          <h3>🎟 {user.coupons}</h3>
          <p>Available Coupons</p>
        </div>
      </div>

      {/* RANK + PROGRESS */}
      <div className="profile-grid-2">
        <div className="card">
          <h3>🌍 Global Ranking</h3>
          <p className="rank-number">#{user.globalRank}</p>
          <p className="muted">
            Ranked among all Interview AI users worldwide
          </p>
        </div>

        <div className="card">
          <h3>📈 Progress Level</h3>
          <p className="muted">Next level unlock at 500 coins</p>

          <div className="progress-bar">
            <div style={{ width: "84%" }} />
          </div>
          <small className="muted">420 / 500 coins</small>
        </div>
      </div>

      {/* REWARDS */}
      <div className="card">
        <h3>🎁 Rewards & Benefits</h3>
        <ul className="reward-list">
          <li>✔ 10% off on Premium Interviews</li>
          <li>✔ Free Resume ATS Scan (1 left)</li>
          <li>✔ Priority Job Matching</li>
        </ul>
      </div>

      {/* ACTIVITY */}
      <div className="card">
        <h3>🕒 Recent Profile Activity</h3>
        <ul className="activity-list">
          <li>🧠 Completed AI Interview – Frontend Engineer</li>
          <li>🪙 Earned 40 coins</li>
          <li>📊 Interview score improved by +5%</li>
          <li>🎟 Coupon unlocked</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
