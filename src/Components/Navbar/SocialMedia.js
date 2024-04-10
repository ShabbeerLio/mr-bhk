import React from 'react'
import "./Navbar.css"
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa6";


const SocialMedia = () => {
    return (
        <>
            <div className="media-items">
                <p>
                    <FaTwitter />
                </p>
                <p>
                    <FaInstagram />
                </p>
                <p>
                    <FaFacebookF />
                </p>
                <p>
                    <FaYoutube />
                </p>
                <p>
                    <FaLinkedinIn />
                </p>
            </div>
        </>
    )
}

export default SocialMedia
