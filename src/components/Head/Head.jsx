import React from 'react'
import './Head.css'
import girlImg from '../../images/img.jpg'
import Box from '../box/box'


function Head() {
    return (
      <div className="home">
          <div className='home-left'>
            <h1>Come share your Queries with us and Join us without any doubts...</h1>
            <p>Hey students, wanted to join in our college and wanted to know more about us or having any queries related to our college don’t worry we will sort it out and heartly welcome to Aditya instutions</p>
            <button className='button1'>know more</button>
          </div>
          <div className='home-right'>
            <div className='img'>
              {/* <Box img={girlImg} text="hii this is durga" className="head-box"/>
              <Box img={girlImg} text="hii this is durga" className="head-box"/>
              <Box img={girlImg} text="hii this is durga" className="head-box"/> */}
              <img src={girlImg}  className="" alt=""/>
            </div>
          </div>
        </div>
    )
  }
  
  export default Head