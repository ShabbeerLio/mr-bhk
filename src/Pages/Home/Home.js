import React from 'react'
import Category from '../../Components/Category/Category'
import LatestProperties from '../../Components/LatestProperties/LatestProperties'
import FindHome from '../../Components/FindHome/FindHome'
import Agents from '../../Components/Agents/Agents'
import FeaturedCity from '../../Components/FeaturedCity/FeaturedCity'
import Categories from '../../Components/Category/Categories'

const Home = () => {
  return (
    <>
      <Category />
      {/* <FindHome/> */}
      <LatestProperties />
      {/* <Agents/> */}
      <FeaturedCity/>
      {/* <Categories/> */}
    </>
  )
}

export default Home
