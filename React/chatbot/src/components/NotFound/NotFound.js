import React from 'react'
import './Notfound.css'
import { useState ,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate=useNavigate()
  const [clickSignup, setClickSignUp] = useState(false);
  useEffect(() => {
    if (clickSignup){
      navigate("/home")
    }
   
  }, [clickSignup]);
  
  return (
    <div className='notfound'>
        <section class="wrapper">
          <div class="top">404</div>
          <div class="bottom" aria-hidden="true">404</div>
          <h1 class="home-title">
             <span>Hey Dude! sorry the page is NotFound</span>
          </h1> 
          <button onClick={() => setClickSignUp(true)} className="button">Home</button>
        </section>
       
    </div>
  )
}
