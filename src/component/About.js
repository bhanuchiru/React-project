import React from 'react'
import AboutBackgroundImage from '../Assests/about-background.png';
import AboutBannerImage from '../Assests/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

export default function About() {
  return (
    <div className='about-section-container' id='abouts'>
      <div className="about-background-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBannerImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primaryheading">Food is an important is Balanced Diet</h1>
        <p className='primary-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur earum necessitatibus qui quas a porro totam corporis nam et.</p>
        <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid, eveniet quo facilis quisquam laboriosam adipisci. Iure, vel rem! Dolorum numquam nobis doloremque placeat aut.</p>
        <div className="about-buttons-container">
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'>
                <BsFillPlayCircleFill />
                Watch Video</button>
        </div>
      </div>
    </div>
  )
}
