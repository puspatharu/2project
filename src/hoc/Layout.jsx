import React from 'react'
import Toolbar from '../components/Navigation/Toolbar'
import Linksection from '../components/Footer/Linksection'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>

      <Toolbar />
      <div><Outlet /></div>
      <Linksection />
    </div>
  )
}

export default Layout