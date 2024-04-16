import React from 'react'
import "./FeaturedCity.css"
import CatergoryData from '../Category/CatergoryData'

const FeaturedCity = () => {
    return (
        <div className='featuredCity'>
            <div className='featuredCity-main'>
                <div className="featuredCity-card">
                    <div className="featuredcard-title">
                        <h4>Featured Cities</h4>
                        <p>Find Property in your city</p>
                    </div>
                </div>
                {CatergoryData.slice(0, 5).map((item) => (
                    <div className="featuredCity-card">
                        <div className="featuredcard-image">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="featuredcard-title">
                            <p>56 Properties</p>
                            <h4>Property in Noida</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedCity
