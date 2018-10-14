import * as express from 'express'

import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
console.log(`ReactDOMServer: `, ReactDOMServer)

// import { StaticRouter } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'

// import routes from './routes'

import * as App from '../containers/App'

const router = express.Router()

router.get('*', (req, res) => {
  ReactDOMServer.renderToNodeStream(
  <App />,
  ).pipe(res)
})

// router.get('*', (req, res) => {
//   console.log(`res: `, res)
// })
export default router
