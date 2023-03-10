import React from 'react'
import './box.css'

function Box(props) {
  return (
    <div className='box'>
        <div className='box-circle'>
           <img src={props.img} alt=""/>
        </div>
        <div className='box-rectangle'>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Box