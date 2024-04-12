import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Logo/mr-bhk3-re.png"
import { HiMenuAlt1 } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import banner from "../../Assets/Home/banner2.jpg"
import { IoIosArrowDown } from "react-icons/io";
import Search from '../Search/Search';
import { CiSearch } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import OffCanvas from './OffCanvas';
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Navbar = () => {

    const [scrolling, setScrolling] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > navbarHeight) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        const updateNavbarHeight = () => {
            const navbarMain = document.querySelector('.navbar-main');
            if (navbarMain) {
                setNavbarHeight(navbarMain.clientHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        updateNavbarHeight();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navbarHeight]);

    // Function to close the menu when a navigation link is clicked
    const closeMenu = () => {
    };

    return (
        <>
            <div className={`navbar-main ${scrolling ? 'navbar-scrolled' : ''}`}>
                <div className={`navbar-image ${scrolling ? 'hidden' : ''}`}>
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
                                        <div className="navbar-location">
                                            <label for="location"> <IoLocationSharp/></label>
                                            <select className="location" name="location" id="location" form="locationform">
                                                <option className="option" value="0">Noida</option>
                                                <option className="option" value="1">Delhi</option>
                                                <option className="option" value="2">Gurgaon</option>
                                                <option className="option" value="3">Gr.Noida</option>
                                                <option className="option" value="4">Ghaziabad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <ul className={`navbar-nav ${scrolling ? 'hidden' : ''} ml-auto`}>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Residential
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Flats in Noida</a></li>
                                                <li><a class="dropdown-item" href="#">Plots in Noida</a></li>
                                                <li><a class="dropdown-item" href="#">Villa in Noida</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Commercial
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Office space in Noida</a></li>
                                                <li><a class="dropdown-item" href="#">Shop in Noida</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Builder
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Gaursons</a></li>
                                                <li><a class="dropdown-item" href="#">Waoe's</a></li>
                                                <li><a class="dropdown-item" href="#">Bhutani</a></li>
                                                <li><a class="dropdown-item" href="#">SKS</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                New Projects
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="#">Veridia</a></li>
                                                <li><a class="dropdown-item" href="#">ATS Floral pathway</a></li>
                                                <li><a class="dropdown-item" href="#">Sikka Kammaya Green</a></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/blogs">Blogs</a>
                                        </li>
                                    </ul>
                                    <div className="navbar-items">

                                        <div className={`navbar-onscroll ${scrolling ? 'hidden' : ''}`}>
                                            <div className="searchbar-search">
                                                <form action="">
                                                    <div className="resident-project">
                                                        <div class="dropdown">
                                                            <p class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{scrolling ? 'Buy' : 'Residential Project'} <IoIosArrowDown /></p>
                                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="searchbar-box">

                                                            <div className="searchbar-boxes">
                                                                <input type="text" />
                                                                <div className="searchnames"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="searchbar-mic">
                                                        <MdMyLocation />
                                                    </div>
                                                    <div className="searchbar-mic">
                                                        <IoMdMic />
                                                    </div>
                                                    <div className="searchbar-button">
                                                        <CiSearch />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="nav-action">
                                            <div className="navbar-search">
                                                <a href="tel: +919958732814">
                                                    <FaPhone />
                                                    <p>9958732814</p>
                                                </a>
                                            </div>
                                            <div className="navbar-search">
                                                <p>Login</p>
                                            </div>
                                            {/* <div className="navbar-contactus">
                                                <FaHeadset />
                                            </div>
                                            <div className="navbar-contactus">
                                                <MdAccountCircle />
                                            </div> */}
                                            <div className="navbar-action" >
                                                <HiMenuAlt1 type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                                    <div class="offcanvas-header">
                                                        <h5 id="offcanvasRightLabel">
                                                            <a className="offcanvas-sign" href="#home">
                                                                <MdAccountCircle /> Login / Registration
                                                            </a>
                                                        </h5>
                                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                        <OffCanvas />
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
                <div className={`navbar-search2 ${scrolling ? 'hidden' : ''}`}>
                    <Search />
                </div>
            </div>
        </>
    )
}

export default Navbar
