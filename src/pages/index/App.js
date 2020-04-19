import React from 'react'
import Loadable from 'react-loadable' // 组件按需加载，缩小首屏文件大小
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { Route } from 'react-router-dom'
import './App.style.scss'

import Home from '@/components/index/home'
// import Order from '@/components/index/order'
// import Mine from '@/components/index/mine'
import BottomNav from '@/components/common/BottomNav'

function Loading() {
  return <div>Loading...</div>
}

const Order = Loadable({
  loader: () => import(/* webpackChunkName: "order" */ '@/components/index/order'),
  loading: Loading,
})

const Mine = Loadable({
  loader: () => import(/* webpackChunkName: "mine" */ '@/components/index/mine'),
  loading: Loading,
})

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
