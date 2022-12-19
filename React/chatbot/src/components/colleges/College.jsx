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
            <h5>ADTP</h5>
            <button className='button grid'>know more</button>
        </div>
        <div className='college-block'>
            <div className='college-img'>
              <img src={second} alt=""/>
            </div>
            <h5>ACET</h5>
            <button className='button grid'>know more</button>
        </div>
        <div className='college-block'>
            <div className='college-img'>
              <img src={third} alt=""/>
            </div>
            <h5>ACES</h5>
            <button className='button grid'>know more</button>
        </div>
    </div>
  )
}

export default College