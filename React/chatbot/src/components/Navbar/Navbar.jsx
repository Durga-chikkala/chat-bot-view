import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='nav'>
        <div className='nav-left'>
          <div>chat.in</div>
        </div>
        <div className='nav-right'>
          <NavLink to="/home" className="link">Home</NavLink>
          <NavLink to="/chat" className="link">Chat</NavLink>
          <NavLink to="/about-us" className="link">About us</NavLink>
          <div className='logout'>
            logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar