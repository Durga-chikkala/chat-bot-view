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
          <li>Feed</li>
          <li>login/signup</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar