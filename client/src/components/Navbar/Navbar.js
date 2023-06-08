import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav_items">
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/diaries'>Diaries</NavLink></li>
            <li><NavLink to='/login'>Auth</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
