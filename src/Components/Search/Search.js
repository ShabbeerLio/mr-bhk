import React, { useState } from 'react'
import "./Search.css"
import { CiSearch } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";
import { IoMdMic, IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

const Search = (props) => {

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
                                <select
                                    className="location"
                                    name="location2"
                                    id="location2"
                                    form="locationform"
                                    value={props.selectedLocation} // Set the selected value to state
                                    onChange={props.handleLocationChange} // Call the function when the selection changes
                                >
                                    <option className="option" value="Noida">Noida</option>
                                    <option className="option" value="Delhi">Delhi</option>
                                    <option className="option" value="Gurgaon">Gurgaon</option>
                                    <option className="option" value="Gr.Noida">Gr.Noida</option>
                                    <option className="option" value="Ghaziabad">Ghaziabad</option>
                                </select>
                            </div>
                            <div className="searchbar-box">
                                <CiSearch />
                                <div className="searchbar-boxes">
                                    <input type="text" placeholder={`Search by "${props.selectedLocation}"`} />
                                    <div className="searchnames"></div>
                                </div>
                        <div className="searchbar-mic">
                            <IoMdMic />
                        </div>
                            </div>
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
