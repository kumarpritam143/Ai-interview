import { useState } from "react"
import "./IDE.css"

function IDE() {
  const [code, setCode] = useState(
`function add(a, b) {
  return a + b
}

// Example:
// add(2, 3) -> 5
`
  )

  return (
    <div className="page ide-page">
      <h2 className="page-title">Live Coding IDE</h2>
      <p className="page-subtitle">
        Practice coding questions in an interview-style coding environment.
      </p>

      {/* TOOLBAR */}
      <div className="ide-toolbar">
        <select>
          <option>JavaScript</option>
          <option>Python</option>
          <option>Java</option>
        </select>

        <select>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <button className="secondary-btn">Reset</button>
        <button className="primary-btn">Run Code</button>
      </div>

      {/* PROBLEM – FULL WIDTH */}
      <div className="card problem-card">
        <div className="ide-header">Problem</div>
        <p>
          Write a function that takes two numbers and returns their sum.
          The function should return an integer representing the result.
        </p>
      </div>

      {/* MAIN ROW */}
      <div className="ide-row">

        {/* LEFT: CODE EDITOR */}
        <div className="card ide-editor">
          <div className="ide-header">Code Editor</div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        {/* RIGHT: OUTPUT */}
        <div className="card ide-output-box">
          <div className="ide-header">Output / Test Results</div>

          <pre className="output-box">
✔ Test Case 1 Passed  
✔ Test Case 2 Passed  
✔ Test Case 3 Passed  

Result: 5  
Execution Successful
          </pre>
        </div>

      </div>

      {/* AI HINT – BOTTOM */}
      <div className="card ai-hint">
        <div className="ide-header">AI Hint</div>
        <p className="card-muted">
          Ensure your function handles edge cases and always returns a value.
        </p>
      </div>
    </div>
  )
}

export default IDE
