// import React from "react"
import "./Open.css"
function Open() {
  return (
    <div className="dashboard">

      {/* PAGE HEADER */}
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p className="muted">
          Track your interview applications and progress
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="dashboard-grid">

        {/* LEFT CONTENT */}
        <div className="dashboard-main">

          {/* STATS CARDS */}
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Total Applications</h4>
              <p className="stat-number">48</p>
              <span className="stat-muted">Last 30 days</span>
            </div>

            <div className="stat-card">
              <h4>Interviews Ongoing</h4>
              <p className="stat-number">6</p>
              <span className="stat-muted">In progress</span>
            </div>

            <div className="stat-card">
              <h4>Interviews Completed</h4>
              <p className="stat-number">21</p>
              <span className="stat-muted">Finished</span>
            </div>

            <div className="stat-card highlight">
              <h4>Selected</h4>
              <p className="stat-number">4</p>
              <span className="stat-muted">Offers received</span>
            </div>
          </div>

          {/* GRAPH SECTION */}
          <div className="graph-card">
            <h3>Weekly Interview Activity</h3>
            <p className="muted">
              Applications vs selections (last 6 weeks)
            </p>

            {/* Fake graph bars */}
            <div className="graph">
              <div className="graph-row">
                <span>Week 1</span>
                <div className="bar">
                  <div className="bar-fill" style={{ width: "70%" }}></div>
                </div>
                <small>7 applied</small>
              </div>

              <div className="graph-row">
                <span>Week 2</span>
                <div className="bar">
                  <div className="bar-fill" style={{ width: "90%" }}></div>
                </div>
                <small>9 applied</small>
              </div>

              <div className="graph-row">
                <span>Week 3</span>
                <div className="bar">
                  <div className="bar-fill" style={{ width: "60%" }}></div>
                </div>
                <small>6 applied</small>
              </div>

              <div className="graph-row">
                <span>Week 4</span>
                <div className="bar">
                  <div className="bar-fill" style={{ width: "80%" }}></div>
                </div>
                <small>8 applied</small>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CHATBOT PANEL */}
        <aside className="dashboard-chat">
          <h4>🤖 AI Assistant</h4>

          <div className="chat-window">
            <div className="chat-msg bot">
              Hi! Need help with interviews or applications?
            </div>

            <div className="chat-msg user">
              How many interviews are ongoing?
            </div>

            <div className="chat-msg bot">
              You currently have <strong>6 ongoing interviews</strong>.
            </div>
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Ask something..." />
            <button>Send</button>
          </div>
        </aside>

      </div>
    </div>
  )
}

export default Open
