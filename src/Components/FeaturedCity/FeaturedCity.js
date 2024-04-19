import React from 'react'
import "./FeaturedCity.css"
import CatergoryData from '../Category/CatergoryData'
import FeaturedCityData from './FeaturedCityData'
import ReactOwlCarousel from 'react-owl-carousel'

const FeaturedCity = () => {

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
            items: 6,
        },
    };
    return (
        <div className='featuredCity'>
            <div className='featuredCity-main'>
                <h2>Tops Cities</h2>
                <ReactOwlCarousel
                    items={6}
                    nav={true}
                    dots={false}
                    responsive={responsiveOptions}
                >
                    {FeaturedCityData.map((item) => (
                        <div className="featuredCity-card">
                            <div className="featuredcard-image">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="featuredcard-title">
                                <p>{item.properties} properties</p>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </ReactOwlCarousel>
            </div>
        </div>
    )
}

export default FeaturedCity
