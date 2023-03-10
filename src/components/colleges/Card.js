import React from 'react';
import './college.css'; // Import CSS file for styling

const Card = ({image, title, description, buttonLabel, buttonLink}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      <center><a href={buttonLink} className="card-button">{buttonLabel}</a></center>  
      </div>
    </div>
  );
}

export default Card;
