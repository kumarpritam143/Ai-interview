import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Profile from './panel/Profile'
import Open from './panel/Open'
import UserLayout from './panel/userlayout'
import Dashboard from './panel/Dashboard'
import Interview from './panel/Interview'
import Insights from './panel/Insights'
import Settings from './panel/Settings'
import Jobs from './panel/Jobs'
import Aptitude from './panel/Aptitude'
import IDE from './panel/IDE'
import Resume from './panel/Resume'

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* User Panel */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="interview" element={<Interview />} />
        <Route path="insights" element={<Insights />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="open" element={<Open />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="aptitude" element={<Aptitude />} />
        <Route path="ide" element={<IDE />} />
        <Route path="resume" element={<Resume />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
