import React from 'react'
import "./Categories.css"
import CategoriesCard from './CategoriesCard'
import CatergoryData from './CatergoryData'

const Categories = () => {
    return (
        <div className='Categories'>
            <div className='Categories-main'>
                <div className="categories-head">
                    <h2>A local estate agency like no other</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aliquam earum odio tempora accusantium velit laborum iure harum temporibus! Atque?</p>
                </div>
                <div className="categories-box">
                    {CatergoryData.map((item , index) => (
                        <CategoriesCard item={item} index={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories
