import React, { useEffect, useRef, useState } from 'react'
import "./Search.css"
import { CiSearch } from "react-icons/ci";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FaAngleDown } from "react-icons/fa6";

const Search = (props) => {

    const items = ['Residential', 'Commercial', 'Plot / Land'];
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const dropdownRef = useRef(null);

    const handleClick = (item) => {
        setSelectedItem(item);
    };

    // slider
    const [budget, setBudget] = useState([5000000, 10000000]); // Range from 70 lakh to 1 crore
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);

    const formatBudget = (value) => {
        if (value < 10000000) {
            return `${Math.round(value / 100000)} L`;
        } else {
            return `${Math.round(value / 10000000)} Cr`;
        }
    };

    const handleSliderChange = (value) => {
        setBudget(value);
    };

    const toggleBudget = () => {
        setIsBudgetOpen(!isBudgetOpen);
    };

    // bhk
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ['1 BHK', '2 BHK', ' 3 BHK', ' 4 BHK', '5 BHK'];
    
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
          setIsBudgetOpen(false)
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [dropdownRef]);
  
    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option) => {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(item => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
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
                                <div className="searchbar-boxes">
                                    <input type="text" placeholder={`Search by "${props.selectedLocation}"`} />
                                    <div className="searchnames"></div>
                                </div>

                                {/* <div className="searchbar-mic">
                            <IoMdMic />
                        </div> */}
                            </div>
                            <div className="searchbar-button">
                                <button> <CiSearch />Search</button>
                            </div>
                        </div>
                        <div className="searchbar-bottom">
                            <h4>Filters</h4>
                            <div className="search-filters" ref={dropdownRef}>
                                <div className="search-head" onClick={toggleBudget}>
                                    <p>Budget</p>
                                    <div className="search-head-range">
                                        <span>{formatBudget(budget[0])} - {formatBudget(budget[1])}</span>
                                    </div>
                                </div>
                                {isBudgetOpen && (
                                    <div className="search-budget">
                                        <Slider
                                            range
                                            min={5000000}
                                            max={50000000}
                                            defaultValue={budget}
                                            onChange={handleSliderChange}
                                            tipFormatter={formatBudget}
                                            marks={{ 5000000: '50 L', 50000000: '5 Cr' }}
                                            step={10000}
                                            railStyle={{ background: '#D3D3D3', height: 5 }}
                                            trackStyle={[{ backgroundColor: '#0196b3', height: 5 }]}
                                            handleStyle={[{ borderColor: '#0196b3', height: 20, width: 20, marginLeft: -2, marginTop: -8 }]}
                                        />
                                    </div>
                                )}

                            </div>
                            <div className="search-filters">
                                <div className="filter-bhk" ref={dropdownRef}>

                                    <p onClick={handleToggleDropdown}>
                                        {selectedOptions.length > 0 ? (
                                            <>
                                                {selectedOptions.map((option, index) => (
                                                <li key={index}>{option}</li>
                                            ))}
                                            </>
                                        ) : (<>
                                            
                                            BHK Type <FaAngleDown />
                                        </>)}
                                    </p>
                                    {isOpen && (
                                        <div className='filter-bhk-dropdown' style={{ backgroundColor: 'white', position: 'absolute', marginTop: '5px' }}>
                                            <ul>
                                                {options.map((option, index) => (
                                                    <li key={index} onClick={() => handleOptionClick(option)}>
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedOptions.includes(option)}
                                                            readOnly
                                                        />
                                                        {option}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="search-filters">
                                <select className="filter-box" name="location" id="location" form="locationform">
                                    <option className="option" value="0">Property Status</option>
                                    <option className="option" value="1">Under Construction</option>
                                    <option className="option" value="2">Ready to Move</option>
                                </select>
                            </div>
                            <div className="search-filters">
                                <div class="checkbox-wrapper-46">
                                    <input type="checkbox" id="cbx-46" class="inp-cbx" />
                                    <label for="cbx-46" class="cbx"
                                    ><span>
                                            <svg viewBox="0 0 12 10" height="10px" width="12px">
                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline></svg></span
                                        ><span>New Building Projects</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
