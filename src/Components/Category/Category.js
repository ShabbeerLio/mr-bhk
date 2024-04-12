import React from 'react'
import "./Category.css"
import CatergoryData from './CatergoryData'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Category = () => {

    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 6,
        },
    };
    return (
        <div className='category'>
            <h1>GET STARTED WITH EXPLORING REAL ESTATE OPTIONS</h1>
            <div className='category-main'>
                <ReactOwlCarousel
                    items={6}
                    nav={true}
                    dots={false}
                    responsive={responsiveOptions}
                >
                    {CatergoryData.map((item) => (
                        <div className="category-card">
                            <img src={item.cover} alt="" />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </ReactOwlCarousel>
            </div>
        </div>
    )
}

export default Category
