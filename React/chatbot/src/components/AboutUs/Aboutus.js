import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProfileCard from '../Profile/ProfileCard'
import Durga from '../../images/durga.jpg'
import Reddy from '../../images/reddy.jpg'
import Vithrendra from '../../images/vithrendra.jpg'
import './Aboutus.css'
function Aboutus() {
  return (
    <div className='about'>
        <Navbar/>
        <div className='about-head'>
            <h1>Who are we?</h1>
            <h1>We are Thinkers,Creators,Achievers</h1>
        </div>
        <h1>Our Team</h1>
        <div className='individual'>
            <ProfileCard img={Durga} name={"Durga"} designation={"CSE, B.Tech(T.L)"} desc={"Hey Hi I am Durga Chikkala I have contributed in Backend,Frontend"}/>
            <ProfileCard img={Reddy} name={"Subba Reddy"} designation={"CSE, B.Tech"} desc={"Hey Hi I am Subba Reddy I have Contributed in preparing the dataset"}/>
            <ProfileCard img={Durga} name={"Karthik "} designation={"CSE, B.Tech"} desc={"Hey Hi I am Karthik  I have contributed in Frontend"}/>
            <ProfileCard img={Vithrendra} name={"Vithrendra"} designation={"CSE, B.Tech"} desc={"Hey Hi I am Vithrendra I have contributed in UI designs"}/> 
        </div>
    </div>
  )
}

export default Aboutus