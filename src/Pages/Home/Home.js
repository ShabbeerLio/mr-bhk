import React from 'react'
import Category from '../../Components/Category/Category'
import LatestProperties from '../../Components/LatestProperties/LatestProperties'
import FindHome from '../../Components/FindHome/FindHome'

const Home = () => {
  return (
    <>
      <Category />
      <FindHome/>
      <LatestProperties />
    </>
  )
}

export default Home
