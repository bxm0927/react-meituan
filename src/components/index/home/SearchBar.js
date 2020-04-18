import React from 'react'
import './SearchBar.style.scss'

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="city">
        <i className="iconfont icon-location" />
        <span className="city-name ellipsis">郑州市</span>
        <i className="iconfont icon-more" />
      </div>

      <div className="input">
        <i className="iconfont icon-search" />
        <span className="place-holder">鸡翅</span>
      </div>
    </div>
  )
}

export default SearchBar
