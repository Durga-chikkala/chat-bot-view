import {useState,React} from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CgProfile} from 'react-icons/cg'
import ProfilePage from '../ProfilePage/ProfilePage';
function Navbar() {
  const [clickButton, setClickButton] = useState(false);

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
          <CgProfile style={{fontSize:"26px",cursor:"pointer"}} onClick={() => setClickButton(!clickButton)}/>
          <div className='profile-block'>
            {clickButton?<ProfilePage/>:""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar