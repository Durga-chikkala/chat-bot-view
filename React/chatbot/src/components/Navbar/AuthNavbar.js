// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function AuthNavbar () {
//     return (
//         <React.Fragment>
//             <Navbar bg="dark" expand="lg" className="navbar-dark">
//                 <Container>
//                     <Navbar.Brand>Chat.in</Navbar.Brand>
//                 </Container>
//             </Navbar>
//         </React.Fragment>
//     );
// }
// export default AuthNavbar
import {useState,React} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CgProfile} from 'react-icons/cg'
import ProfilePage from '../ProfilePage/ProfilePage';
function Navbar() {
  
  return (
    <div className="navbar">
      <div className='nav'>
       <div className='d-flex justify-content-center' >
        <div>chat.in</div>
        </div>
       
      
      </div>
    </div>
  )
}

export default Navbar