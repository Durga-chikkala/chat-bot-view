import React from 'react'
import './college.css'
import first from '../../images/first.png'
import second from '../../images/second.png'
import third from '../../images/third.png'

function College() {
  return (
    <div className='college'>
        <div className='college-block'>
            <div className='college-img'>
              <img src={first} alt=""/>
            </div>
            <h5>Aditya Engineering College </h5>
            <p>It is approved by AICTE, recognized by Govt. of Andhra Pradesh, permanently affiliated to (JNTUK).</p>
            <button class="button-71" > Know More</button>      
            </div>
        <div className='college-block'>
            <div className='college-img'>
              <img src={second} alt=""/>
            </div>
            <h5>ADITYA COLLEGE OF ENGINEERING & TECHNOLOGY</h5>
            <p>It is approved by AICTE, recognized by Govt. of Andhra Pradesh, permanently affiliated to (JNTUK).</p>
            <button class="button-71" > Know More</button>      
        </div>
        <div className='college-block'>
            <div className='college-img'>
              <img src={third} alt=""/>
            </div>
            <h5>ADITYA COLLEGE OF ENGINEERING</h5>
            <p>It is approved by AICTE, recognized by Govt. of Andhra Pradesh, permanently affiliated to (JNTUK).</p>

            <button class="button-71" > Know More</button>      
        </div>
    </div>
  )
}

export default College