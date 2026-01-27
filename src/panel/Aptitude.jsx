import { useState } from "react"
import "./Aptitude.css"

function Aptitude() {
  const [topic, setTopic] = useState(null)
  const [selected, setSelected] = useState(null)

  // 🔹 Topic-wise Questions Data
  const questions = {
    "Quantitative Aptitude": {
      q: "If a train travels 300 km in 5 hours, what is its average speed?",
      options: ["40 km/hr", "50 km/hr", "60 km/hr", "70 km/hr"],
      tip: "Average speed = Total Distance ÷ Total Time."
    },
    "Logical Reasoning": {
      q: "Which number comes next in the series: 2, 4, 8, 16, ?",
      options: ["18", "24", "32", "34"],
      tip: "The pattern is multiplying by 2 each time."
    },
    "Verbal Ability": {
      q: "Choose the correct synonym of 'Abundant'.",
      options: ["Scarce", "Plenty", "Rare", "Little"],
      tip: "Abundant means available in large quantity."
    },
    "Time & Work": {
      q: "If A can do a work in 10 days, how long will A take to do half the work?",
      options: ["5 days", "10 days", "15 days", "20 days"],
      tip: "Work rate remains constant."
    },
    "Speed & Distance": {
      q: "A car covers 60 km in 1.5 hours. What is its speed?",
      options: ["30 km/hr", "40 km/hr", "45 km/hr", "50 km/hr"],
      tip: "Speed = Distance ÷ Time."
    },
    "Profit & Loss": {
      q: "An item bought for ₹500 is sold for ₹600. What is the profit percentage?",
      options: ["10%", "15%", "20%", "25%"],
      tip: "Profit % = (Profit ÷ Cost Price) × 100."
    },
    "Probability": {
      q: "What is the probability of getting a head when tossing a fair coin?",
      options: ["0", "1", "1/2", "1/4"],
      tip: "A fair coin has two equally likely outcomes."
    },
    "Number System": {
      q: "Which of the following is a prime number?",
      options: ["21", "29", "39", "49"],
      tip: "A prime number has exactly two factors."
    }
  }

  const currentQ = topic ? questions[topic] : null

  return (
    <div className="page aptitude-page">
      <h2 className="page-title">Aptitude Practice</h2>
      <p className="page-subtitle">
        Improve logical thinking, quantitative aptitude, and reasoning skills.
      </p>

      {/* TOP STATS */}
      <div className="aptitude-stats">
        <div className="card stat">
          <h3>120</h3>
          <p>Questions Practiced</p>
        </div>
        <div className="card stat">
          <h3>68%</h3>
          <p>Accuracy</p>
        </div>
        <div className="card stat">
          <h3>Medium</h3>
          <p>Current Level</p>
        </div>
      </div>

      {/* TOPIC SELECTION */}
      {!topic && (
        <div className="card topic-card">
          <h3>Select an Aptitude Topic</h3>

          <div className="topic-grid">
            {Object.keys(questions).map((t) => (
              <button
                key={t}
                className="topic-btn"
                onClick={() => {
                  setTopic(t)
                  setSelected(null)
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* QUESTION SECTION */}
      {topic && currentQ && (
        <>
          <div className="card aptitude-question">
            <h3>{topic} – Question</h3>
            <p>{currentQ.q}</p>

            <div className="options">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  className={`option ${selected === i ? "selected" : ""}`}
                  onClick={() => setSelected(i)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="aptitude-actions">
              <button
                className="secondary-btn"
                onClick={() => {
                  setTopic(null)
                  setSelected(null)
                }}
              >
                Change Topic
              </button>
              <button className="primary-btn">
                Submit Answer
              </button>
            </div>
          </div>

          {/* AI TIP */}
          <div className="card">
            <h3>AI Tip</h3>
            <p className="card-muted">
              {currentQ.tip}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Aptitude
