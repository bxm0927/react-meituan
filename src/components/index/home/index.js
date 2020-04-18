import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Business from './Business'

function Home() {
  return (
    <div className="home-tab">
      <Banner />
      <Category />
      <Business />
    </div>
  )
}

export default Home
