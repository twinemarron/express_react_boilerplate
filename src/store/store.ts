import { createStore, applyMiddleware } from 'redux'
// import Logger from 'redux-logger'

import reducer from './reducer'
console.log('reducer');
console.log(reducer);

const PRODUCTION = process.env.NODE_ENV === 'production'

const reducerExample = () => {
  switch (action.type) {
    case '':
      return Object.assign({}, state);
  }
  return state;
}

const configureStore = () => {
  const middlewares = []

  // if (!PRODUCTION) {
  //   middleware.push(Logger)
  // }

  // const store = createStore(reducer, applyMiddleware(...middlewares))
  const store = createStore(reducerExample, applyMiddleware(...middlewares))

  return store
}

export default configureStore
