import { useNavigate } from "react-router-dom"

function Insights() {
  const navigate = useNavigate()

  return (
    <div className="page">
      <h2 className="page-title">AI Interview Insights</h2>
      <p className="page-subtitle">
        Detailed performance analysis based on your AI interview sessions.
      </p>

      {/* OVERALL SUMMARY */}
      <div className="card highlight-card">
        <h3>Overall Interview Score</h3>
        <p className="overall-score">78%</p>
        <p className="card-muted">
          You performed well in technical questions with scope for improvement
          in communication clarity.
        </p>
      </div>

      {/* SKILL CARDS */}
      <div className="insights-grid">
        {[
          ['Frontend Skills', '82%', 'Strong understanding of React & UI logic'],
          ['Backend Skills', '70%', 'Basic API & data handling knowledge'],
          ['Communication', '80%', 'Clear explanations with minor hesitation'],
          ['Problem Solving', '75%', 'Good approach, improve edge cases'],
        ].map(([title, value, desc]) => (
          <div key={title} className="card insight-card">
            <h4>{title}</h4>
            <p className="insight-score">{value}</p>
            <p className="insight-desc">{desc}</p>
          </div>
        ))}
      </div>

      {/* STRENGTHS & IMPROVEMENTS */}
      <div className="insights-grid-2">
        <div className="card">
          <h3>Key Strengths</h3>
          <ul className="insight-list">
            <li>✔ Strong React & frontend fundamentals</li>
            <li>✔ Good project explanation skills</li>
            <li>✔ Logical problem-solving approach</li>
          </ul>
        </div>

        <div className="card">
          <h3>Areas to Improve</h3>
          <ul className="insight-list warning">
            <li>⚠ Improve communication confidence</li>
            <li>⚠ Practice system design basics</li>
            <li>⚠ Handle edge cases more clearly</li>
          </ul>
        </div>
      </div>

      {/* AI RECOMMENDATIONS */}
      <div className="card">
        <h3>AI Recommendations</h3>
        <p className="card-muted">
          Based on your performance, you are best suited for:
        </p>

        <ul className="recommendation-list">
          <li>Frontend Engineer (Junior – Mid level)</li>
          <li>React Developer</li>
          <li>Frontend-heavy Full Stack Developer</li>
        </ul>

        <p className="card-muted">
          Suggested next steps:
        </p>
        <ul className="recommendation-list">
          <li>Take 2 more AI mock interviews</li>
          <li>Revise system design fundamentals</li>
          <li>Apply to high-match frontend roles</li>
        </ul>
      </div>

      {/* ACTION */}
      <div className="card action-card">
        <h3>Next Action</h3>
        <p className="card-muted">
          Continue improving with targeted AI interviews.
        </p>
        <button
          className="primary-btn"
          onClick={() => navigate("/user/interview")}
        >
          Start Another Interview
        </button>
      </div>
    </div>
  )
}

export default Insights
