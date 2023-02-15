import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul className='nav'>
        <div className='nav-left'>
          <li>chat.in</li>
        </div>
        <div className='nav-right'>
          <li>Home</li>
          <li>Chat</li>
          <li>About us</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar