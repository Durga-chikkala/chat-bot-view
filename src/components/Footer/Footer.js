import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FcStart} from 'react-icons/fc'

import logo from '../../images/foot.png'


function Footer() {
  return (
    


  //   <div className='footer'>
  //       <h2>ADITYA COLLEGE OF ENGINEERING AND TECHNOLOGY</h2><br />
  //       <div className='address'>
  //       <p>
  //           Phone (India) :<br/>
  //           <b>0884-2326212,9959176665 </b><br/>
  //           Whats App : +91 7036076661<br/>
  //           Fax : 0884-2326203
  //           E-mail : adityacollegeenggtech@gmail.com<br/>
  //           <b>E-mail : office@acet.ac.in</b><br/>
  //           Aditya Nagar, ADB Road,
  //           Surampalem - Pin:533437
  //           East-Godavari District,
  //           Andhra Pradesh,
  //           INDIA.
  //       </p></div><div>
  //       <ul>
  //         <li><a href="https://www.facebook.com/AECaditya"><BsFacebook className='icons'/></a></li>
  //         <li><a href="https://www.instagram.com/aditya_engg_colleges/?hl=en"><AiFillInstagram className='icons pink'/></a></li>
  //         <li><a href="https://youtu.be/IoAVUAEesvQ"><FcStart className='icons'/></a></li>
  //       </ul> </div>
  //      <div  style={{
  //           height:'40%',
  //           width:'80%'
  //         }} >
  //         <iframe title='aditya college' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.794456818783!2d82.06461081485794!3d17.089409888257865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a378165aaaaaaab%3A0x481e8b12b4b80715!2sAditya%20Engineering%20College!5e1!3m2!1sen!2sus!4v1675913996264!5m2!1sen!2sus" width="400" height="300" Style={"border:0;"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  //      </div>
<div><br />
<section>Aditya Educational Institutions</section>
<footer class="footer-distributed">

			<div class="footer-left">

				<img src={logo} style={{height:'100px' , width:'200px'}}></img><br />

				{/* <p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p> */}
<br/>
				<p class="footer-company-name">Aditya Educational Institutions © 2023-All Rights Reserved.   
</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Aditya Nagar</span> ADB Road,
             Surampalem - Pin:533437<br/>
            East-Godavari District,<br/>
           Andhra Pradesh,
           INDIA.</p>
				</div><br/>

				<div>
					<i class="fa fa-phone"></i>
          <p>
          Phone (India) :<br />
          <b>0884-2326212,9959176665 </b><br />
             WhatsApp : +91 7036076661<br/>
             Fax : 0884-2326203
				</p>
        </div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto: info@aditya.ac.in"> info@aditya.ac.in</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the Institutions</span>
          Our focus is not just learning but the process of learning for learning is a phase which begins and gradually blooms into a beautiful flower and hence every stage of this metamorphosis requires intense care, sincerity and dedication. And rightly so, to address this journey of educational evolution, we have courses and academics from KG to PG.<br/>
          <a style={{
            textDecorationColor: 'blue',
            textDecoration:'none'
          }} href='https://aditya.ac.in/'>Click Here</a>
				</p>

				<div class="footer-icons">
        
           <a href="https://www.facebook.com/AECaditya"><BsFacebook className='icons'/></a>
          <a href="https://www.instagram.com/aditya_engg_colleges/?hl=en"><AiFillInstagram className='icons pink'/></a>
           <a href="https://youtu.be/IoAVUAEesvQ"><FcStart className='icons'/></a>
        
				
				</div>

			</div>

		</footer>
    </div>

  )
}

export default Footer