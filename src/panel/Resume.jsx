import { useState } from "react"
import "./Resume.css"

function Resume() {
  const [file, setFile] = useState(null)
  const [role, setRole] = useState("")
  const [analyzed, setAnalyzed] = useState(false)

  const handleAnalyze = () => {
    if (!file || !role) return
    setAnalyzed(true)
  }

  // 🔹 Role-based fake ATS data
  const roleData = {
    "Frontend Engineer": {
      ats: "82%",
      keyword: "85%",
      format: "78%",
      exp: "88%",
      suggestions: [
        "Add more React, Next.js, and UI optimization keywords",
        "Mention performance improvements with metrics",
        "Highlight reusable components and hooks usage"
      ]
    },
    "Backend Developer": {
      ats: "74%",
      keyword: "70%",
      format: "80%",
      exp: "76%",
      suggestions: [
        "Add keywords like APIs, Databases, Authentication",
        "Mention scalability and backend architecture",
        "Include tools like Node.js, SQL, MongoDB"
      ]
    },
    "Full Stack Developer": {
      ats: "79%",
      keyword: "78%",
      format: "82%",
      exp: "80%",
      suggestions: [
        "Balance frontend and backend experience",
        "Add deployment & cloud exposure",
        "Show end-to-end project ownership"
      ]
    }
  }

  const data = roleData[role]

  return (
    <div className="page resume-page">
      <h2 className="page-title">AI Resume Analyzer</h2>
      <p className="page-subtitle">
        Upload your resume and select a job role to get ATS-based analysis.
      </p>

      {/* UPLOAD + ROLE */}
      <div className="card resume-upload">
        <h3>Resume Details</h3>

        <label className="form-label">Select Job Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Choose Job Role --</option>
          <option>Frontend Engineer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
        </select>

        <label className="form-label">Upload Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="primary-btn" onClick={handleAnalyze}>
          Analyze Resume
        </button>
      </div>

      {/* RESULT */}
      {analyzed && data && (
        <>
          {/* ATS SCORE */}
          <div className="card ats-score-card">
            <h3>ATS Score for {role}</h3>
            <div className="ats-score">{data.ats}</div>
            <p className="card-muted">
              Resume compatibility based on selected job role.
            </p>
          </div>

          {/* BREAKDOWN */}
          <div className="resume-grid">
            <div className="card">
              <h4>Keyword Match</h4>
              <p className="score good">{data.keyword}</p>
            </div>

            <div className="card">
              <h4>Formatting</h4>
              <p className="score average">{data.format}</p>
            </div>

            <div className="card">
              <h4>Experience Relevance</h4>
              <p className="score good">{data.exp}</p>
            </div>
          </div>

          {/* AI SUGGESTIONS */}
          <div className="card">
            <h3>AI Suggestions for {role}</h3>
            <ul className="suggestion-list">
              {data.suggestions.map((s, i) => (
                <li key={i}>✔ {s}</li>
              ))}
            </ul>
          </div>

          {/* ACTION */}
          <div className="card action-card">
            <h3>Next Step</h3>
            <p className="card-muted">
              Tailor your resume specifically for the selected role and
              re-analyze to improve your ATS score.
            </p>
            <button className="secondary-btn">
              Re-upload Resume
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Resume
