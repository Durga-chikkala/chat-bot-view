import React from 'react'
import "./login.css"
import Loginlogo from "../../images/login-logo.png"
import { useState ,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import useFetch from '../useFetch/useFetch';

function Login() {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");
  const [clickSignup, setClickSignUp] = useState(false);
  const [error,setError]=useState(false)

  async function handleSubmit(e){
    e.preventDefault();
    let params = {
      "email": email,
      "password": password
    };
    
    let query = Object.keys(params)
                 .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                 .join('&');
    
  let url = 'http://localhost:8000/user/login?' + query;

  }

  useEffect(() => {
    if (clickSignup){
      navigate("/signup")
    }
   
  }, [clickSignup]);
  

  return (
    <div className='login'>
       <div className="login-left">
          <form onSubmit={handleSubmit} className='login-box'>
            <div className='text'>
              <h1>Chat.in</h1>
              <p>Hey, How do you do ?</p>
              <p id="error" className={setError?"not-error":"error"}></p>
            </div>
             <input type="text" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
             <input type="password" placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
             <button className='button'>Login</button>
          </form>
       </div>
       <div className="login-right">
        <div className='login-top'>
          <img src={Loginlogo} alt="Login-logo"></img>
          <p>Chatbot</p>
        </div>
        <div className='login-below'>
          <p>Don't have an account</p>
          <button onClick={() => setClickSignUp(true)} className='button'>Signup</button>
        </div>
       </div>
       </div>
  )
 
}


export default Login