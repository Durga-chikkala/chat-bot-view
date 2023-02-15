import React from 'react'
import "./login.css"
import Loginlogo from "../../images/login-logo.png"
import { useState } from 'react'
import Home from '../Home/Home'
import { Link, Route } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");
  async function handleSubmit(e){
    e.preventDefault();
    let params = {
      "email": email,
      "password": password
    };
    
    let query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');
    
  let url = 'http://localhost:4000/login?' + query;
  let response=await fetch(url)
  const data = await response.json()
  if (data.user) {
    alert("done")
      window.location.href='../Home'
    }
    else {
      alert("plz check")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}  className='login'>
       <div className="login-left">
          <div className='login-box'>
            <div className='text'>
              <h1>Chat.in</h1>
              <p>Hey, How do you do ?</p>
            </div>
             <input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
             <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
             <button className='button'>Login</button>
          </div>
       </div>
       <div className="login-right">
        <div className='login-top'>
          <img src={Loginlogo} alt="Login-logo"></img>
          <p>Chatbot</p>
        </div>
        <div className='login-below'>
          <p>Don't have an account</p>
        <button className='button'>Signup</button>
        </div>
       </div>
       </form>
       </div>
  )
 
}


export default Login