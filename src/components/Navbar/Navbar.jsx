import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav} from 'react-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="#369F9D" expand="lg" style={{backgroundColor:'#369F9D'}}>
      <Navbar.Brand href="/home" style={{
          color:'white',
          fontSize:'30px',
          fontWeight:'500'
        }}>Chat Bot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='hello'>
        <Nav className="ml-auto " style={{
          color:'red',
          fontSize:'18px',
          fontWeight:'400',

          

        }}>
        <Nav.Link as={Link} to="/Home" style={{color:'white',cursor:'pointer'}}>Home</Nav.Link>         
        <Nav.Link as={Link} to="/chatportal" style={{color:'white',cursor:'pointer'}}>ChatPortal</Nav.Link>
        <Nav.Link as={Link} to="/login"style={{color:'white',cursor:'pointer'}}>Login</Nav.Link>
        <Nav.Link as={Link} to="/signup"style={{color:'white',cursor:'pointer'}}>SignUp</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;







// import React, { useState } from 'react'
// import './Navbar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import  '../ChatPortal/ChatWindow';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from '../Home/Home'
// import {ChatWindow} from '../ChatPortal/ChatWindow'


// const Navbar = () => {
//   const [showNav, setShowNav] = useState(false);

//   const toggleNav = () => {
//     setShowNav(!showNav);
//   };
//   return (
//     <div>
    



//     <nav className="navbar">
//       <button className="navbar-toggler" onClick={toggleNav}>
//         Toggle Navigation
//       </button>
//       <ul className={`navbar-nav ${showNav ? 'show' : ''}`}>
//         <li className="logo">
//           <a href="#" className="nav-link">
//             Logo
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             Contact
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link">
//             Login
//           </a>
//         </li>
//       </ul>
//     </nav>
// </div>

//   );
// };

// export default Navbar;

//     <nav className="navbar">
//       <div className="logo1">
//         <button data-text="Awesome" className="button1">
//           <span className="actual-text" style={{color:'whit'}}>&nbsp;ChatBot&nbsp;</span>
//           {/* <span className="hover-text" aria-hidden="true">&nbsp;ChatBot&nbsp;</span> */}
//         </button>
//       </div>
//       <div className={menuOpen ? "menu-button1 open" : "menu-button1"} onClick={handleMenuClick}>
//         <div className="toggle-button1"></div>
//         <div className="toggle-button1"></div>
//         <div className="toggle-button1"></div>
      
//       </div>
//       <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        






// <Link href={ChatWindow}>
//         <li><a href="#" onClick={closeMenu}>Home</a></li>
//         </Link>
//         <li><a href="#" onClick={closeMenu}>ChatPortal</a></li>
//         <li><a href="#" onClick={closeMenu}>About</a></li>
//         <li><a href="#" onClick={closeMenu}>Contact</a></li>
//         <li><a href="#" onClick={closeMenu}>Login</a></li>
//         <li><a href="#" onClick={closeMenu}>SignUp</a></li>
//       </ul>
//     </nav>
{/* <nav>
<ul>
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Contact</a></li>
</ul>
</nav> */}