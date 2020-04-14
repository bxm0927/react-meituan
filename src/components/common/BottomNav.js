import React from 'react'
import { connect } from 'react-redux'
import { changeActiveTab } from '@/store/modules/index/actionCreators'
import './BottomNav.style.scss'

function BottomNav({ tabs, activeTabKey, changeActiveTab }) {
  function handelNavChange(navItem) {
    if (navItem.key === activeTabKey) return
    changeActiveTab(navItem.key)
  }

  return (
    <nav className="container bottom-nav">
      <ul>
        {tabs.map((item) => (
          <li
            onClick={handelNavChange.bind(this, item)}
            key={item.key}
            className={`${item.key} ${item.key === activeTabKey ? 'active' : ''}`}
          >
            <div className="icon"></div>
            <span className="name">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  tabs: state.index.tabs,
  activeTabKey: state.index.activeTabKey,
})

const mapDispatchToProps = {
  changeActiveTab,
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomNav)
