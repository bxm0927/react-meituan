import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from '@/store'
import { BrowserRouter } from 'react-router-dom'

// Style
import '@/assets/stylesheets/reset.scss'
import '@/assets/stylesheets/common.scss'
import '@/assets/fonts/iconfont.css'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
