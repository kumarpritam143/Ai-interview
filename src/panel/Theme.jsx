function Theme() {
  const setTheme = (mode) => {
    document.body.setAttribute('data-theme', mode)
    localStorage.setItem('theme', mode)
  }

  return (
    <div style={{ padding: '24px', maxWidth: '500px' }}>
      <h2 style={{ fontSize: '22px' }}>Appearance</h2>
      <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
        Choose how Interview AI looks for you.
      </p>

      <div style={{ display: 'flex', gap: '16px' }}>
        <button
          onClick={() => setTheme('dark')}
          style={themeBtn}
        >
          🌙 Dark Mode
        </button>

        <button
          onClick={() => setTheme('light')}
          style={themeBtn}
        >
          ☀️ Light Mode
        </button>
      </div>
    </div>
  )
}

const themeBtn = {
  padding: '14px 18px',
  borderRadius: '10px',
  border: '1px solid var(--border)',
  background: 'var(--panel)',
  color: 'var(--text)',
  cursor: 'pointer',
}

export default Theme
