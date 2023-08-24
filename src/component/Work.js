import React from 'react'
import PickMeals from '../Assests/pick-meals-image.png'
import ChooseMeals from '../Assests/choose-image.png'
import DeliveryImageMeals from '../Assests/delivery-image.png'

export default function Work() {
    const workInfo = [
        {
            Image : PickMeals,
            title : "Pick Meals",
            text :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore recusandae consequatur doloremque tempore magni laboriosam."
        },
        {
            Image : ChooseMeals,
            title : "Choose How Often",
            text :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore recusandae consequatur doloremque tempore magni laboriosam."
        },
        {
            Image : DeliveryImageMeals,
            title : "Fast Deliveries",
            text :  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore recusandae consequatur doloremque tempore magni laboriosam."
        }

    ]
  return (
    <div className='work-section-wrapper'> 
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate distinctio, obcaecati inventore autem libero voluptas qui aliquid sunt laboriosam provident!</p>
      </div>
      <div className="work-section-bottom">
        {workInfo.map((data) =>(
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.Image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
      </div>
    </div>
  )
}
