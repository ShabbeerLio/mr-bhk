import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Logo/mr-bhk.png"
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaHeadset } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import SocialMedia from './SocialMedia';
import banner from "../../Assets/Home/banner.jpg"
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const [menuClass, setMenuClass] = useState('nav-menu');
    // Function to close the menu when a navigation link is clicked
    const closeMenu = () => {
        setMenuClass('nav-menu');
    };

    return (
        <>
            <div className="navbar-main">
                <div className="navbar-image">
                    <img src={banner} alt="" />
                </div>
                <div className="navBar">
                    <div id="myNavMenu" className="nav-menu">
                        <nav className="row navbar navbar-expand-lg navbar-light align-items-lg-end">
                            <div className="container-fluid">
                                <a className="navBar-logo" href="#home">
                                    <img src={Logo} alt="" />
                                </a>
                                <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon top-bar"></span>
                                    <span className="toggler-icon middle-bar"></span>
                                    <span className="toggler-icon bottom-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="navbar-items">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item ">
                                                <a className="nav-link" href="#business" onClick={closeMenu}> Our Business <IoIosArrowDown/></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="navbar-items">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#home" onClick={closeMenu}>Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#about" onClick={closeMenu}>About Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#gallery" onClick={closeMenu}>Gallery</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#careers" onClick={closeMenu}>Careers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#blogs" onClick={closeMenu}>Blogs</a>
                                            </li>
                                        </ul>
                                        <div className="nav-action">
                                            <div className="navbar-search">
                                                <p>Sell/Rent Property</p>
                                                <span>free</span>
                                            </div>
                                            <div className="navbar-contactus">
                                                <FaHeadset />
                                            </div>
                                            <div className="navbar-contactus">
                                                <MdAccountCircle />
                                            </div>
                                            <div className="navbar-action" >
                                                <HiMenuAlt1 type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 id="offcanvasRightLabel">
                                                            <a className="navBar-logo" href="#home">
                                                                <img src={Logo} alt="" />
                                                            </a>
                                                        </h5>
                                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        <h6>Welcome to mr.bhk </h6>
                                                        <p>JU Agri Sciences private Limited is a group company of Jhaver Group.</p>
                                                        <div className="side-contactInfo">
                                                            <h6>Contact Us</h6>
                                                            <div className="line1"></div>
                                                            <ul>
                                                                <li>
                                                                    <FaLocationDot />
                                                                    <div className="contact-info">
                                                                        {/* <h5>Location</h5> */}
                                                                        <p> Unit No.2302, Express Trade Tower II B 36, Sector 132, Noida, UP 201301</p>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <FaEnvelope />
                                                                    <div className="contact-info">
                                                                        {/* <h5>Email Us</h5> */}
                                                                        <p>info@juagrisciences.com</p>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
