import React from 'react';
import "../login/login.css";
import "./Signup.css";
import {useToken} from '../login/useToken';
import axios from 'axios'; 
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
import Loginlogo from "../../images/login-logo.png"
import { useState } from 'react'

function Signup() {
    const [token,setToken]=useToken()

    const [firstName, setName] = useState("");
    const [lastName,setLastName]=useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const response = await axios.post('http://localhost:8000/user/signup',{
        "firstName":firstName,
        "lastName":lastName,
        "dob":dob,
        "gender":"male",
        "phone":phone,
        "email":email,
        "password":password
      });

      const {token}= response.data;

      setToken(token);

      
    }

  return (
    <div>
      <NavBar />
    <div>
        <form onSubmit={handleSubmit}  className='login'>
        <div className="login-right">
        <div className='login-top'>
          <img src={Loginlogo} alt="Login-logo"></img>
          <p>Chatbot</p>
        </div>
        <div className='login-below'>
          <p>Already have an account</p>
          <button className='button'>Login</button>
        </div>
       </div>
       <div className="login-left signup">
          <div className='signup-box'>
            <div className='text'>
              <h1>Chat.in</h1>
              <p>Welcome yaar!</p>
            </div>
             <input type="text" placeholder='enter FirstName' value={firstName} onChange={(e)=>setName(e.target.value)}></input>
             <input type="text" placeholder='enter LastName' value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
             <input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
             <input type="text" placeholder='enter Phone' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
             <input type="date" placeholder='enter Dob' value={dob} onChange={(e)=>setDob(e.target.value)}></input>
             <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
             <button className='button' >Signup</button>
          </div>
       </div>
      
       </form>
    </div>
    <Footer />
    </div>
  )}

export default Signup