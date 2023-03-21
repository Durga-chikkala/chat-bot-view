import React from "react";
import { Button, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
const PortalNavbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/auth/login');
    }
    return (
        <React.Fragment>
        
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
          <CgProfile style={{fontSize:"26px",cursor:"pointer"}} onClick={() => setClickButton(!clickButton)}/>
          <div className='profile-block'>
            {clickButton?<ProfilePage/>:""}
          </div>
          <Nav.Link>
<Button className="btn-warning" onClick={logout}>Logout</Button>
</Nav.Link>
        </div>
        </React.Fragment>
    );
}
export default PortalNavbar;

