import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'

// import Logger from 'redux-logger'

const PRODUCTION = process.env.NODE_ENV === 'production'

const configureStore = () => {
  const middlewares = []

  // if (!PRODUCTION) {
  //   middleware.push(Logger)
  // }

  const store = createStore(reducer, applyMiddleware(...middlewares))

  return store
}

export default configureStore
