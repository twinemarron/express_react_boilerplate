import * as express from 'express'

import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes'

// console.log('routes == : ', routes)
// console.log('renderRoutes(routes) : ', renderRoutes(routes))

const router = express.Router()

const Routes = () => renderRoutes(routes)

router.get('*', (req, res) => {
  let context = {}
  ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      {
        // renderRoutes(routes)
      }
      <Routes />
    </StaticRouter>
  ).pipe(res)
})

export default router
