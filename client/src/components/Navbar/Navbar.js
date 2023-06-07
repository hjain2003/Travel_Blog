import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav_items">
        <ul>
            <li>Home</li>
            <li>Diaries</li>
            <li>Auth</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
