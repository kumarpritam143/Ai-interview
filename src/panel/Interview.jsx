import { useState } from "react"
import aiAvatar from "../assets/ai-avatar.png"

function Interview() {
  const [answer, setAnswer] = useState("")
  const [chat, setChat] = useState([
    {
      role: "ai",
      text: "Introduce yourself and explain one project you have worked on."
    }
  ])

  function submitAnswer() {
    if (!answer.trim()) return

    // add candidate answer
    setChat((prev) => [
      ...prev,
      { role: "user", text: answer },
      {
        role: "ai",
        text: "Interesting. Why did you choose this technology stack for the project?"
      }
    ])

    setAnswer("")
  }

  return (
    <div className="page">
      <h2 className="page-title">AI Face-to-Face Interview</h2>
      <p className="page-subtitle">
        Answer honestly. The AI will ask follow-up questions.
      </p>

      {/* MAIN INTERVIEW LAYOUT */}
      <div className="interview-layout">

        {/* LEFT SIDE – INTERVIEW PANEL */}
        <div className="card interview-panel">

          {/* AI AVATAR */}
{/* INTERVIEW HEADER */}
<div className="interview-header">
  <div className="avatar-box">
    <img
      src={aiAvatar}
      alt="AI Interviewer"
      className="avatar-img"
    />
  </div>

  <div className="interviewer-info">
    <h4>AI Interviewer</h4>
    <span className="live-status">● Live</span>
  </div>
</div>

{/* QUESTION */}
<div className="question-section">
  <p className="question-label">Current Question</p>
  <p className="question-text">
    {chat.filter((c) => c.role === "ai").slice(-1)[0]?.text}
  </p>
</div>
    
          {/* ANSWER BOX */}
          <textarea
            className="answer-box"
            placeholder="Type your answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <div className="action-row">
            <button className="mic-btn">🎤</button>
            <button className="secondary-btn" onClick={submitAnswer}>
              Submit Answer
            </button>
          </div>
        </div>

        {/* RIGHT SIDE – LIVE CHAT / LOG */}
        <div className="card chat-panel">
          <h3 className="chat-title">Live Interview Log</h3>

          <div className="chat-box">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble ${
                  msg.role === "ai" ? "ai-bubble" : "user-bubble"
                }`}
              >
                <strong>{msg.role === "ai" ? "AI" : "You"}:</strong>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Interview
