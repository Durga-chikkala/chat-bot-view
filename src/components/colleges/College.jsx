import React from 'react'
import Card from './Card'
import './college.css'
import image1 from '../../images/first.png'
import image2 from '../../images/second.png'
import image3 from '../../images/third.png'

function College() {
  return (
    <div>
       <div className="card-container">
      <Card 
        image={image1}
        title="ADITYA ENGINEERING COLLEGE"
        description="It is approved by AICTE, recognized by Govt. of Andhra Pradesh, permanently affiliated to (JNTUK)."
        buttonLabel="Learn More"
        buttonLink="https://aec.edu.in"
      />
      <Card 
        image={image2}
        title="ADITYA COLLEGE OF ENGINEERING & TECHNOLOGY"
        description="It is approved by AICTE, recognized by Govt. of Andhra Pradesh, permanently affiliated to (JNTUK)."
        buttonLabel="Learn More"
        buttonLink="http://www.acet.ac.in"
      />
      <Card 
        image={image3}
        title="ADITYA COLLEGE OF ENGINEERING"
        description="It is approved by AICTE, recognized by Govt. of Andhra Pradesh, permanently affiliated to (JNTUK)."
        buttonLabel="Learn More"
        buttonLink="https://www.acoe.edu.in"
      />
    </div>
    </div>
  )
}

export default College