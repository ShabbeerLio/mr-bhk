import React from 'react'
import "./LatestProperties.css"
import CatergoryData from '../Category/CatergoryData'

const LatestProperties = () => {
    return (
        <div className='latestProperty'>
            <div className='latestProperty-main'>
                <h2>Latest Properties</h2>
                <div className="property-box">
                    {CatergoryData.slice(0, 6).map((item) => (
                        <div className="property-card">
                            <div className="property-card-image">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="property-card-detail">
                                <span>4 BHk Flat</span>
                                <h3>₹ 45.5 l | 2794 sqft </h3>
                                <p> 2794 sq ft 4BHK at Noida sector 62</p>
                                <p>Ready to move</p>
                                <span className='view'>View Detail</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="latestProperty-more">
                    <p>View More</p>
                </div>
            </div>
        </div>
    )
}

export default LatestProperties
