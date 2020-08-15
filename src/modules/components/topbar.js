import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Topbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Shared Space
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className = 'nav-item'>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className = 'nav-item'>
            <NavLink to="/login" className="nav-link">
              Sign In
            </NavLink>
          </li>
          <li className = 'nav-item'>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Topbar
