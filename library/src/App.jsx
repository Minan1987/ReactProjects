import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Books from './components/Books'
import Book from './components/Book'


const App = () => {
  return (
    <section className='container'>
      <h1>اپلیکیشن مدیریت مخاطبین</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <Link to="/" className="nav-link">خانه</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">درباره ما</Link>
            </li>
            <li className="nav-item">
            <Link to="/books" className="nav-link">کتاب ها</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </section>
  )
}

export default App
