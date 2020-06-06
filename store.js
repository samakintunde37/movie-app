import { applyMiddleware, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk, promiseMiddleware]

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
