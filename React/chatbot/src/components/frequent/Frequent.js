import React from 'react'
import './Frequent.css'
import { useState ,useEffect} from 'react'
import {useNavigate } from 'react-router-dom';

function Frequent() {
  const navigate=useNavigate()
  const [clickButton, setClickButton] = useState(false);
  useEffect(() => {
    if (clickButton){
      navigate("/frequent-questions")
    }
   
  }, [clickButton]);

  return (
    <div className='frequent'>
        <h2>Most Frequently Asked Questions</h2>
        <button onClick={() => setClickButton(true)} className='button inside'>Click here</button>
    </div>
  )
}

export default Frequent