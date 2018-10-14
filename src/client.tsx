import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as configureStore from './store/store'

import { BrouserRouter } from 'react-router-dom'
import { renderRouter } from 'react-router-config'

import * as routes from './routes/routes'

const state = configureStore()

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
