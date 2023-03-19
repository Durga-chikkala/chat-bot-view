import React from 'react'
import './ProfileCard.css'

function ProfileCard(props) {
  return (
    <div className='profile'>
        <div className='profile-img'>
           <img src={props.img} alt="fff"/>
        </div>
        <div className='profile-desc'>
           <h3>{props.name}</h3>
           <p>{props.designation}</p>
           <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default ProfileCard