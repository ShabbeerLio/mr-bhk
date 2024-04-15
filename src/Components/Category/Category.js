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
            items: 4,
        },
    };
    return (
        <div className='category'>
            <div className='category-main'>
                <h1>Get started with exploring real estate options</h1>
                <ReactOwlCarousel
                    items={6}
                    nav={true}
                    dots={false}
                    responsive={responsiveOptions}
                >
                    {CatergoryData.map((item) => (
                        <div className="category-card">
                            <div className="category-image">
                                <img src={item.cover} alt="" />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </ReactOwlCarousel>
            </div>
        </div>
    )
}

export default Category
