import React from 'react'
import "./Agents.css"
import CatergoryData from '../Category/CatergoryData'
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Agents = () => {

    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };

    return (
        <div className='agents'>
            <div className="agents-bhk">
                <span>mr.BHK</span>
            </div>
            <div className='agents-main'>
                <h2>Top Agents in Noida</h2>
                <div className="agents-box">
                    <ReactOwlCarousel
                        items={6}
                        nav={true}
                        dots={false}
                        responsive={responsiveOptions}
                    >
                        {CatergoryData.map((item) => (
                            <div className="agents-box-cards">
                                <div className="agentCard-left">
                                    <div className="agentimage">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <h4>name of person</h4>
                                    <div className="agent-company">
                                        {/* <h5>Nexus Home</h5> */}
                                        <p>24 years <span>Experience</span></p>
                                    </div>
                                </div>
                                <div className="agentCard-right">
                                    <span className='agenttop'></span>
                                    <span className='agentbottom'></span>
                                    <div className="agentright-detail">
                                        <h5> 8000+</h5>
                                        <p>Served</p>
                                        <h5>115</h5>
                                        <p>Properties for Sale </p>
                                        <h5>26</h5>
                                        <p>Properties for Rent </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ReactOwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Agents
