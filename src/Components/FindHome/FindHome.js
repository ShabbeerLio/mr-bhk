import React from 'react'
import "./FindHome.css"
import { FaHandshake, FaChartLine, FaLaptopHouse, FaCopy } from "react-icons/fa";

const FindHome = () => {
    return (
        <div className='findhome'>
            <div className='findhome-main'>
                <div className="findhome-box">
                    <div className="findhome-left">
                        <div className="findhome-left-image">
                            <img src="https://static.vecteezy.com/system/resources/previews/025/191/097/non_2x/modern-skyscraper-reflects-futuristic-design-in-bright-blue-geometric-pattern-generated-by-ai-free-photo.jpg" alt="" />
                            <img src="https://static.vecteezy.com/system/resources/previews/024/746/249/non_2x/modern-skyscraper-reflects-futuristic-design-in-illuminated-cityscape-at-night-generated-by-ai-free-photo.jpg" alt="" />
                            <img src="https://static.vecteezy.com/system/resources/previews/024/616/165/non_2x/futuristic-skyscraper-reflects-modern-city-life-in-abstract-design-generated-by-ai-free-photo.jpg" alt="" />
                        </div>
                    </div>
                    <div className="findhome-right">
                        <h3>Find your new home with us</h3>
                        <p>With years of experience in the real estate market, we have an unparalleled understanding of the local landscape. Trust us to guide you through the intricacies of buying or selling your property.</p>
                        <div className="findhome-options">
                            <div className="findhome-opt-box">
                                <a href="">
                                    <FaHandshake />
                                    <p>Sell your home</p>
                                </a>
                            </div>
                            <div className="findhome-opt-box">
                                <a href="">
                                    <FaChartLine />
                                    <p>Buy a home</p>
                                </a>
                            </div>
                            <div className="findhome-opt-box">
                                <a href="">
                                    <FaLaptopHouse />
                                    <p>Rent a Place</p>
                                </a>
                            </div>
                            <div className="findhome-opt-box">
                                <a href="">
                                    <FaCopy />
                                    <p>Legal Work</p>
                                </a>
                            </div>
                        </div>
                        <div className="findhome-button">
                            <p>Explore Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindHome
