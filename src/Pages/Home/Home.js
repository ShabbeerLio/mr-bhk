import React from 'react'
import Search from '../../Components/Search/Search'
import Category from '../../Components/Category/Category'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-main">
            <Search/>
            <Category/>
        </div>
    </div>
  )
}

export default Home
