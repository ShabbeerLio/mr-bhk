import React, { useState } from 'react'
import "./Search.css"
import { CiSearch } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";
import { IoMdMic, IoIosArrowDown } from "react-icons/io";

const Search = () => {

    const items = ['Residentail', 'Commercial', 'New Projects', 'Plot / Land'];
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const handleClick = (item) => {
        setSelectedItem(item);
    };
    return (
        <div className='searchbar'>
            <div className="searchbar-main">
                <div className="searchbar-top">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}><a href="#" className={selectedItem === item ? 'selected' : ''} onClick={() => handleClick(item)}>{item}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="searchbar-search">
                    <form action="">
                        <div className="resident-project">
                            <div class="dropdown">
                                <p class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Noida<IoIosArrowDown /></p>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div className="searchbar-box">
                                <CiSearch />
                                <div className="searchbar-boxes">
                                    <input type="text" placeholder='Search By City" Noida"' />
                                    <div className="searchnames"></div>
                                </div>
                            </div>
                        </div>
                        <div className="searchbar-mic">
                            <IoMdMic />
                        </div>
                        <div className="search-filters">
                            <select className="filter-box" name="location" id="location" form="locationform">
                                <option className="option" value="0">Budget</option>
                                <option className="option" value="1">(10-20) L</option>
                                <option className="option" value="2">(20-30) L</option>
                                <option className="option" value="3">(30-40) L</option>
                                <option className="option" value="4">(40-50) L</option>
                            </select>
                        </div>
                        <div className="search-filters">
                            <select className="filter-box" name="location" id="location" form="locationform">
                                <option className="option" value="0">Property Type</option>
                                <option className="option" value="1">1 BHK</option>
                                <option className="option" value="2">2 BHK</option>
                                <option className="option" value="3">3 BHK</option>
                                <option className="option" value="4">4 BHK</option>
                            </select>
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
