import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({isLoggedIn}) => {
  return (
    <div className='nav'>
      <div className="nav_items">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/diaries'>Diaries</NavLink></li>
            <li><NavLink to='/login'>Auth</NavLink></li>
        </ul>
      </div>
      {isLoggedIn && <NavLink to='/logout' id="logout">Logout</NavLink>}
    </div>
  )
}

export default Navbar
