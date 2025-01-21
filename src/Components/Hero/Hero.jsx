import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <dv className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting edge curiculum is designed to empower students
          with the knowledge needed to excel in the dynamic field of education
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt='' /></button>
      </dv>
    </div>
  )
}

export default Hero
