import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import heroImg from "../assets/ai-bg.jpg"
import "./home.css"

function Home() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  )

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <div className="landing">

      {/* OFFER BAR
      <div className="offer-bar">
        🚀 AI-powered interviews — free for early users
      </div> */}

      {/* HEADER */}
      <header className="landing-header">
        <div className="brand">🤖 Interview AI</div>

        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>

          {/* THEME TOGGLE (same as Navbar) */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <Link to="/login" className="nav-btn">
            Sign In
          </Link>
        </nav>
      </header>

      {/* HERO WITH BACKGROUND IMAGE */}
     {/* HERO FULL BACKGROUND */}
<section
  className="hero-bg"
  style={{ backgroundImage: `url(${heroImg})` }}
>
  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>
      Smarter <span>AI Interviews</span><br />
      Better Hiring Decisions
    </h1>

    <p className="hero-desc">
      Conduct resume-aware, skill-based interviews with real-time
      AI analysis, scoring, and actionable insights.
    </p>

    <ul className="hero-points">
      <li>✔ Bias-free AI evaluation</li>
      <li>✔ Resume & role aware questions</li>
      <li>✔ Instant interview reports</li>
    </ul>

    <div className="hero-cta">
      <Link className="primary-btn" to="/register">
        Get Started Free
      </Link>
      <span>No credit card required</span>
    </div>
  </div>
</section>


      {/* FEATURES */}
      <section className="section soft" id="features">
        <h2 className="section-title">Key Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            🧠
            <h4>AI Scoring</h4>
            <p>Objective and skill-based candidate evaluation</p>
          </div>

          <div className="feature-card">
            📄
            <h4>Resume Aware</h4>
            <p>Questions tailored to resume & job role</p>
          </div>

          <div className="feature-card">
            🔊
            <h4>Live Analysis</h4>
            <p>Transcripts, sentiment & competency highlights</p>
          </div>

          <div className="feature-card">
            🔒
            <h4>Secure</h4>
            <p>Encrypted interviews & controlled access</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <h2 className="section-title">Pricing</h2>

        <div className="pricing-grid">
          <div className="feature-card">
            <h4>Starter</h4>
            <div className="price">₹0</div>
            <p>5 interviews / month</p>
          </div>

          <div className="feature-card highlight">
            <h4>Growth</h4>
            <div className="price">₹6,999</div>
            <p>Unlimited interviews + analytics</p>
          </div>

          <div className="feature-card">
            <h4>Enterprise</h4>
            <div className="price">Custom</div>
            <p>SSO, SLAs & dedicated support</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section soft" id="reviews">
        <h2 className="section-title">What Teams Say</h2>

        <div className="review-grid">
          <div className="feature-card">
            “Cut our hiring time by 40%.”
            <br /><strong>HR Lead</strong>
          </div>

          <div className="feature-card">
            “Resume-aware interviews are 🔥”
            <br /><strong>Engineering Manager</strong>
          </div>

          <div className="feature-card">
            “Clean UI & accurate insights.”
            <br /><strong>Startup Founder</strong>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to hire smarter?</h2>
        <Link className="primary-btn" to="/register">
          Start Interviewing
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Interview AI. All rights reserved.
      </footer>

    </div>
  )
}

export default Home
