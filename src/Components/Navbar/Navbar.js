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
import { Nav, NavDropdown } from 'react-bootstrap';

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

    const [selectedLocation, setSelectedLocation] = useState("Noida");

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const [showDropdown, setShowDropdown] = useState(false);
    const [showCommercial, setShowCommercial] = useState(false);
    const [showBuilder, setShowBuilder] = useState(false);
    const [showNewProjects, setShowNewProjects] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const handleCommercialMouseEnter = () => {
        setShowCommercial(true);
    };

    const handleCommercialMouseLeave = () => {
        setShowCommercial(false);
    };

    const handleBuilderMouseEnter = () => {
        setShowBuilder(true);
    };

    const handleBuilderMouseLeave = () => {
        setShowBuilder(false);
    };

    const handleNewProjectsMouseEnter = () => {
        setShowNewProjects(true);
    };

    const handleNewProjectsMouseLeave = () => {
        setShowNewProjects(false);
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
                                            <label for="location"> <IoLocationSharp /></label>
                                            <select className="location"
                                                name="location"
                                                id="location"
                                                form="locationform"
                                                value={selectedLocation}
                                                onChange={handleLocationChange}>
                                                <option className="option" value="Noida">Noida</option>
                                                <option className="option" value="Delhi">Delhi</option>
                                                <option className="option" value="Gurgaon">Gurgaon</option>
                                                <option className="option" value="Gr.Noida">Gr.Noida</option>
                                                <option className="option" value="Ghaziabad">Ghaziabad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <ul className={`navbar-nav ${scrolling ? 'hidden' : ''} ml-auto`}>
                                        <Nav >
                                            <NavDropdown
                                                title="Residential"
                                                show={showDropdown}
                                                id="nav-dropdown"
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <NavDropdown.Item href="#">Flats in Noida</NavDropdown.Item>
                                                <NavDropdown.Item href="#">Plots in Noida</NavDropdown.Item>
                                                <NavDropdown.Item href="#">Villa in Noida</NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown
                                                title="Commercial"
                                                show={showCommercial}
                                                id="commercial-dropdown"
                                                onMouseEnter={handleCommercialMouseEnter}
                                                onMouseLeave={handleCommercialMouseLeave}
                                            >
                                                <NavDropdown.Item href="#">Office space in Noida</NavDropdown.Item>
                                                <NavDropdown.Item href="#">Shop in Noida</NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown
                                                title="Builder"
                                                show={showBuilder}
                                                id="builder-dropdown"
                                                onMouseEnter={handleBuilderMouseEnter}
                                                onMouseLeave={handleBuilderMouseLeave}
                                            >
                                                <NavDropdown.Item href="#">Gaursons</NavDropdown.Item>
                                                <NavDropdown.Item href="#">Waoe's</NavDropdown.Item>
                                                <NavDropdown.Item href="#">Bhutani</NavDropdown.Item>
                                                <NavDropdown.Item href="#">SKS</NavDropdown.Item>
                                            </NavDropdown>

                                            <NavDropdown
                                                title="New Projects"
                                                show={showNewProjects}
                                                id="new-projects-dropdown"
                                                onMouseEnter={handleNewProjectsMouseEnter}
                                                onMouseLeave={handleNewProjectsMouseLeave}
                                            >
                                                <NavDropdown.Item href="#">Veridia</NavDropdown.Item>
                                                <NavDropdown.Item href="#">ATS Floral pathway</NavDropdown.Item>
                                                <NavDropdown.Item href="#">Sikka Kammaya Green</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
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
                                                            <select className="location-chs" name="location-chs" id="location-chs" form="locationform">
                                                                <option className="option" value="Residential">Residential</option>
                                                                <option className="option" value="Commercial">Commercial</option>
                                                                <option className="option" value="New Projects">New Projects</option>
                                                                <option className="option" value="Plot / Land">Plot / Land</option>
                                                            </select>
                                                        </div>
                                                        <div className="searchbar-box">

                                                            <div className="searchbar-boxes">
                                                                <input type="text" placeholder={`Search by "${selectedLocation}"`} />
                                                                {/* <div className="searchnames"></div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <div className="searchbar-mic">
                                                        <MdMyLocation />
                                                    </div> */}
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
                    <Search selectedLocation={selectedLocation} handleLocationChange={handleLocationChange} />
                </div>
            </div>
        </>
    )
}

export default Navbar
