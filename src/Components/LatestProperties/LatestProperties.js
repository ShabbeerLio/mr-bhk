import React from 'react'
import "./LatestProperties.css"
import CatergoryData from '../Category/CatergoryData'

const LatestProperties = () => {
    return (
        <div className='latestProperty'>
            <div className='latestProperty-main'>
                <h1>Latest Properties</h1>
                <div className="property-box">
                    {CatergoryData.slice(0, 6).map((item) => (
                        <div className="property-card">
                            <div className="property-card-image">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="property-card-detail">
                                <span>4 BHk Flat</span>
                                <h2>₹ 45.5 l | 2794 sqft </h2>
                                <p>Uncover Extravagance with a 2794 sq ft 4BHK at Lotus Panache – Yours at an Irresistible Price of 2.5 Cr.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestProperties
