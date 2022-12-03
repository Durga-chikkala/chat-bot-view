import React from 'react'
import "./login.css"
function Login() {
  return (
    
    <div className='login'>
      <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" className='svg'><defs><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(45 0.5 0.5)"><stop offset="0%" stop-color="#f1f1f1"></stop><stop offset="100%" stop-color="#e8ebf9"></stop></linearGradient></defs><path d="M77,67Q69,84,51.5,81Q34,78,26.5,64Q19,50,23,30Q27,10,49,11.5Q71,13,78,31.5Q85,50,77,67Z" stroke="none" stroke-width="0" fill="url(#fill)"></path></svg>

      <svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg" className='svg1'><path d="M80.5,69.5Q73,89,52.5,85Q32,81,21.5,65.5Q11,50,22.5,36.5Q34,23,53,17.5Q72,12,80,31Q88,50,80.5,69.5Z" stroke="none" stroke-width="0" fill="#47cde6"></path></svg>

      <svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg" className='svg3'><path d="M58.5,64Q34,78,32,47Q30,16,56.5,33Q83,50,58.5,64Z" stroke="none" stroke-width="0" fill="#e6a247"></path></svg>
 
        <div className="main-circle">
                <h1>Sign in</h1>
            <div className="field">
            <input type="text" required/>
            <label>Email Id</label>
            </div>
            <div class="field">
            <input type="password" required/>
            <label>Password</label>
            </div>
            <button className="button-71" role="button">Login</button>
        </div>
        <div className='side1'>
            <h3>Sign up</h3>
        </div>
        <div className='side2'>
          <div>Forgot </div>
          <div>password</div>
        </div>
    </div>
  )
}

export default Login