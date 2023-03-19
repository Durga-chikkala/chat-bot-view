import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FcStart} from 'react-icons/fc'
function Footer() {
  return (
    <div className='footer'>
        <h2>ADITYA COLLEGE OF ENGINEERING AND TECHNOLOGY</h2>
        <div className='address'>
        <p>
            Phone (India) :<br/>
            <b>0884-2326212,9959176665 </b><br/>
            Whats App : +91 7036076661<br/>
            Fax : 0884-2326203
            E-mail : adityacollegeenggtech@gmail.com<br/>
            <b>E-mail : office@acet.ac.in</b><br/>
            Aditya Nagar, ADB Road,
            Surampalem - Pin:533437
            East-Godavari District,
            Andhra Pradesh,
            INDIA.
        </p>
        <ul>
          <li><a href="https://www.facebook.com/ACETaditya"><BsFacebook className='icons'/></a></li>
          <li><a href="https://www.instagram.com/aditya_engg_colleges/"><AiFillInstagram className='icons pink'/></a></li>
          <li><a href="https://www.youtube.com/channel/UCQmzQy9b4i6Q6X86DkX1H1g"><FcStart className='icons'/></a></li>
        </ul>
       <div>
          <iframe title='aditya college' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.794456818783!2d82.06461081485794!3d17.089409888257865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a378165aaaaaaab%3A0x481e8b12b4b80715!2sAditya%20Engineering%20College!5e1!3m2!1sen!2sus!4v1675913996264!5m2!1sen!2sus" width="400" height="300" Style={"border:0;"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
 </div>
    </div>
  )
}

export default Footer