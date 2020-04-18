import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './BottomNav.style.scss'

function BottomNav({ tabs }) {
  return (
    <nav className="container bottom-nav">
      {tabs.map((item) => (
        <NavLink
          exact
          to={item.link}
          key={item.key}
          className={`nav-item ${item.key}`}
          activeClassName="active"
        >
          <div className="icon"></div>
          <span className="name">{item.name}</span>
        </NavLink>
      ))}
    </nav>
  )
}

const mapStateToProps = (state) => ({
  tabs: state.index.tabs,
})

export default connect(mapStateToProps)(BottomNav)
