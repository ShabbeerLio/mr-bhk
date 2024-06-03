import React from 'react'
import "./PropertyDetail.css"
import img from "../../Assets/Home/banner2.jpg"

const PropertyDetail = () => {
    return (
        <div className='PropertyDetail'>
            <div className="PropertyDetail-banner">
                <img src={img} alt="" />
            </div>
            <div className='PropertyDetail-main'>
                <div className="propertydeatail-head">
                    <p>1 Killarney Road, Templestowe Lower VIC 3107</p>
                    <p>₹ 40 L</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetail
