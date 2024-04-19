import React from 'react'
import "./Footer.css"
import logo from "../../Assets/Logo/mr-bhk3-re.png"

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-main'>
                <div className="footer-box">
                    <div className="footer-item">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, libero.</p>
                    </div>
                    <div className="footer-item">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
