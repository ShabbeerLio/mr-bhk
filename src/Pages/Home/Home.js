import React from 'react'
import Category from '../../Components/Category/Category'
import LatestProperties from '../../Components/LatestProperties/LatestProperties'
import FindHome from '../../Components/FindHome/FindHome'
import Agents from '../../Components/Agents/Agents'
import FeaturedCity from '../../Components/FeaturedCity/FeaturedCity'

const Home = () => {
  return (
    <>
      <Category />
      <FindHome/>
      <LatestProperties />
      <Agents/>
      <FeaturedCity/>
    </>
  )
}

export default Home
