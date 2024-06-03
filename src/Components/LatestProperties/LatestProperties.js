import React from 'react'
import "./LatestProperties.css"
import LatestPropertyData from './LatestPropertyData'
import ReactOwlCarousel from 'react-owl-carousel'
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { Link } from 'react-router-dom';

const LatestProperties = () => {

    const responsiveOptions = {
        0: {
            items: 1,
        },
        420: {
            items: 2,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    };

    return (
        <div className='latestProperty'>
            <div className='latestProperty-main'>
                <h2>Latest Properties</h2>
                <div className="property-box">
                    <ReactOwlCarousel
                        items={6}
                        nav={true}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {LatestPropertyData.map((item) => (
                            <Link to="/property">
                                <div className="property-card">
                                    <div className="property-card-image">
                                        <img src={item.cover} alt="" />
                                        <span>Possession from Oct 2027</span>
                                    </div>
                                    <div className="property-card-detail">
                                        <span>{item.bhk} BHK Flat</span>
                                        <h3>₹ {item.price} | {item.sqft} sqft </h3>
                                        <p> <FaBath /> {item.bed} <FaBed /> {item.bathroom} <BiArea />{item.sqft} sqft</p>
                                        <p>{item.area}</p>
                                        {/* <span className='view'>View Detail</span> */}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default LatestProperties
