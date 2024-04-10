import React from 'react'
import "./Search.css"
import { CiSearch } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";
import { IoMdMic ,IoIosArrowDown } from "react-icons/io";

const Search = () => {
    return (
        <div className='searchbar'>
            <div className="searchbar-main">
                <div className="searchbar-top">
                    <ul>
                        <li><a href="">Buy</a></li>
                        <li><a href="">Reant</a></li>
                        <li><a href="">New Launch</a></li>
                        <li><a href="">PG / Co-living</a></li>
                        <li><a href="">Commercial</a></li>
                        <li><a href="">Plots/Land</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>
                <div className="searchbar-search">
                    <form action="">
                        <div className="resident-project">
                            <div class="dropdown">
                                <p class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Residential Project <IoIosArrowDown/></p>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="searchbar-box">
                                <CiSearch />
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
                            <button>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
