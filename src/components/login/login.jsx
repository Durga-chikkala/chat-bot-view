import React from 'react'
import "./login.css"
import Loginlogo from "../../images/login-logo.png"
import { useState ,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


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
  let response=await fetch(url,{
    method: 'get',
    dataType: 'jsonp',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
    }
})
  const data = await response.json()
  console.log(data)
  if (data.id!==undefined) {
    navigate("/home",{replace:true})
  }
  else {
      setError(true)
    }
  }

  useEffect(() => {
   if(error){
     document.getElementById("error").innerHTML="Oops I guess you missed out something in credentials"
   }
   console.log(clickSignup)
  }, []);
  

  return (
    <div>
      <div>
          <Navbar />
          </div>
   <div>
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
       </div>
       <Footer />
       </div>
  )
 
}


export default Login