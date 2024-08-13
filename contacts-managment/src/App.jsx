import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>اپلیکیشن مدیریت مخاطبین</h1>
      <nav>
        <Link to="/about" >درباره ما</Link>
        <Link to="/books" >کتاب ها</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
