import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import '../styles/panel.css'

function UserLayout() {
  return (
    <div className="panel">
      <Sidebar />
      <div className="panel-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout
