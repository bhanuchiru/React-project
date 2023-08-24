import React from 'react'
import ProfilePic from '../Assests/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

export default function Testimonial() {
  return (    
      <div className="work-section-wrapper" id='testimonials'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea molestiae asperiores natus architecto debitis cupiditate nisi. Quia suscipit beatae labore!</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reprehenderit adipisci sunt quam nulla facilis, magnam ipsa quo debitis quia.</p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
      </div>
    
  )
}
