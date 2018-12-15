import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as configureStore from './store/store'

import { createStore } from 'redux';

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import * as routes from './routes/routes'

const store = configureStore()
const Routes = () => renderRoutes(routes)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
