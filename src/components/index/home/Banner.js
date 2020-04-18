import React from 'react'
import SearchBar from './SearchBar'
import banner from '@/assets/images/index/bannertemp.e8a6fa63.jpg'
import './Banner.style.scss'

function Banner() {
  return (
    <section className="banner-wrapper">
      <SearchBar />

      <div className="banner-img">
        <img src={banner} alt="banner" />
      </div>
    </section>
  )
}

export default Banner
