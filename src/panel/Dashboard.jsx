import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="page">
      {/* HEADER */}
      <h2 className="page-title">Welcome back 👋</h2>
      <p className="page-subtitle">
        Track your interview performance, readiness, and job opportunities.
      </p>

      {/* TOP STATS */}
      <div className="dashboard-stats">
        <div className="card stat-card">
          <h3>5</h3>
          <p className="card-muted">AI Interviews Taken</p>
        </div>

        <div className="card stat-card">
          <h3>84%</h3>
          <p className="card-muted">Average Interview Score</p>
        </div>

        <div className="card stat-card">
          <h3>17</h3>
          <p className="card-muted">Job Matches Found</p>
        </div>

        <div className="card stat-card">
          <h3>6</h3>
          <p className="card-muted">Jobs Applied</p>
        </div>
      </div>

      {/* INTERVIEW READINESS */}
      <div className="card">
        <h3 className="card-title">Interview Readiness</h3>
        <p className="card-muted">
          Based on your recent AI interview performance
        </p>

        <div className="progress-group">
          <div className="progress-row">
            <span>Technical Skills</span>
            <span>85%</span>
          </div>
          <div className="progress-bar">
            <div style={{ width: "85%" }} />
          </div>

          <div className="progress-row">
            <span>Communication</span>
            <span>78%</span>
          </div>
          <div className="progress-bar">
            <div style={{ width: "78%" }} />
          </div>

          <div className="progress-row">
            <span>Problem Solving</span>
            <span>82%</span>
          </div>
          <div className="progress-bar">
            <div style={{ width: "82%" }} />
          </div>
        </div>
      </div>

      {/* MAIN ACTION */}
      <div className="card highlight-card">
        <h3 className="card-title">AI Interview Session</h3>
        <p className="card-muted">
          Resume-based questions · Real-time follow-ups · Instant feedback
        </p>

        <ul className="dashboard-list">
          <li>✔ Adaptive difficulty based on your answers</li>
          <li>✔ Technical + HR evaluation</li>
          <li>✔ Personalized improvement tips</li>
        </ul>

        <button
          className="primary-btn"
          onClick={() => navigate("/user/interview")}
        >
          Start New Interview
        </button>
      </div>

      {/* GRID: SKILLS + JOB INSIGHTS */}
      <div className="dashboard-grid-2">
        {/* SKILLS */}
        <div className="card">
          <h3 className="card-title">Skill Analysis</h3>
          <p className="card-muted">Your strongest and weakest areas</p>

          <ul className="skill-list">
            <li>
              <span>React.js</span>
              <span className="good">Strong</span>
            </li>
            <li>
              <span>JavaScript</span>
              <span className="good">Strong</span>
            </li>
            <li>
              <span>System Design</span>
              <span className="average">Needs Practice</span>
            </li>
            <li>
              <span>Communication</span>
              <span className="average">Needs Improvement</span>
            </li>
          </ul>
        </div>

        {/* JOB INSIGHTS */}
        <div className="card">
          <h3 className="card-title">Job Insights</h3>
          <p className="card-muted">
            Recommended roles based on your profile
          </p>

          <ul className="job-insight-list">
            <li>💼 Frontend Engineer – Doomsheel</li>
            <li>💼 React Developer – Doomsheel</li>
            <li>💼 UI Engineer – Doomsheel</li>
            <li>💼 Frontend Intern – Doomsheel</li>
          </ul>

          <button
            className="secondary-btn"
            onClick={() => navigate("/user/jobs")}
          >
            View All Jobs
          </button>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="card">
        <h3 className="card-title">Recent Activity</h3>
        <p className="card-muted">Your latest actions</p>

        <ul className="activity-list">
          <li>🧠 AI Interview completed – Frontend Engineer</li>
          <li>📊 Interview score improved by +6%</li>
          <li>💼 Applied to UI Engineer at Doomsheel</li>
          <li>📄 Resume analyzed for skill gaps</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
