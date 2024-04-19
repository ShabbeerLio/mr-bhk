import React from 'react'

const CategoriesCard = ({ item }) => {

    var index = (item.id);

    return (
        <>
            {index % 2 != 0 ? (
                <>
                    <div className="categoriesbox-card" key={index}>
                        <div className="categoriescard-left">
                            <img src={item.cover} alt="" />
                        </div>
                        <div className="categoriescard-right">
                            <div className="categoriesright-head">
                                <h3>{item.title2}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="categoriescard-button">
                                <p>Explore Now</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="categoriesbox-card" key={index}>
                        <div className="categoriescard-right">
                            <div className="categoriesright-head">
                                <h3>{item.title2}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="categoriescard-button">
                                <p>Explore Now</p>
                            </div>
                        </div>
                        <div className="categoriescard-left">
                            <img src={item.cover} alt="" />
                        </div>
                    </div>
                </>
            )}
        </>

    )
}

export default CategoriesCard
