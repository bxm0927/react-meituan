import React from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { Route } from 'react-router-dom'
import './App.style.scss'

import Home from '@/components/index/home'
import Order from '@/components/index/order'
import Mine from '@/components/index/mine'
import BottomNav from '@/components/common/BottomNav'

function App() {
  return (
    <div className="page-index">
      <Route exact path="/" component={Home} />
      <Route path="/order" component={Order} />
      <Route path="/mine" component={Mine} />
      <BottomNav />
    </div>
  )
}

export default hot(connect()(App))
