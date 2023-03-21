import React, { useRef } from 'react'
import "./login.css"
import axios from 'axios'
import Loginlogo from "../../images/login-logo.png"
import { useState ,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import useFetch from '../useFetch/useFetch';

function Login() {
  const navigate=useNavigate()
  // const [email, setEmail] = useState("");
  // const [password,setPassword]=useState("");
  // const [clickSignup, setClickSignUp] = useState(false);
  // const [error,setError]=useState(false)
  // const Edata = useRef()
  // const Pdata = useRef()
  const loginAPI = 'http://localhost:8000/user/login';
  // const [email,setEmail] =useState("");
  // const [password, setPassword] = useState("")


  async function handleSubmit(e){
    e.preventDefault();
   
    const formElement = document.querySelector('#loginForm');
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);
    const btnPointer = document.querySelector('#login-btn');
    btnPointer.innerHTML = 'Please wait..';
    btnPointer.setAttribute('disabled', true);
    axios.post(loginAPI, formDataJSON).then((response) => {
        btnPointer.innerHTML = 'Login';
        btnPointer.removeAttribute('disabled');
        const data = response.data;
        const token = data.token;
        if (!token) {
            alert('Unable to login. Please try after some time.');
            return;
        }
        localStorage.clear();
        localStorage.setItem('user-token', token);
        setTimeout(() => {
            navigate('/home');
        }, 500);
}).catch((error) => {
        btnPointer.innerHTML = 'Login';
        btnPointer.removeAttribute('disabled');
        alert("Oops! Some error occured.");
    });

  }

//     let params = {
//       "email": email,
//       "password": password
//     };
    
//     let query = Object.keys(params)
//                  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
//                  .join('&');
    
//   let url = 'http://localhost:8000/user/login?' + query;

//  console.log(Edata.current.value,"Email");
//  console.log(Pdata.current.value,"Password")
//  localStorage.setItem("Email" , Edata.current.value)
//  localStorage.setItem("password" ,Pdata.current.value)
 
//   }

//   useEffect(() => {

//     if (clickSignup){
//       navigate("/signup")
//     }
   
//   }, [clickSignup]);
  

  return (
    <div className='login'>
       <div className="login-left">
          <form onSubmit={handleSubmit} id="loginForm" className='login-box'>
            <div className='text'>
              <h1>Chat.in</h1>
              <p>Hey, How do you do ?</p>
              {/* <p id="error" className={setError?"not-error":"error"}></p> */}
            </div>
             <input type="text" id={'login-username'}  placeholder='enter email' ></input>
             <input type="password" id={'login-password'}   placeholder='enter password' ></input>
             <button className='button' id="login-btn">Login</button>
          </form>
       </div>
       <div className="login-right">
        <div className='login-top'>
          <img src={Loginlogo} alt="Login-logo"></img>
          <p>Chatbot</p>
        </div>
        <div className='login-below'>
          <p>Don't have an account</p>
          <button onClick={() => setClickSignUp(true)} className='button' id="login-btn">Signup</button>
        </div>
       </div>
       </div>
  )
 
}


export default Login