import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

// create the logger middleware
const logger = createLogger()

// redux devtools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk, logger))
const store = createStore(reducers, enhancer)

// HMR
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducers = require('./reducers').default
    store.replaceReducer(nextReducers)
  })
}

export default store
