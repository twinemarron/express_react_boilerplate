import * as express from 'express'

import * as React from 'react'
import ReactDOMServer from 'react-dom/server'

import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './routes'

const router = express.Router()

router.get('*', (req, res) => {
  let context = {}
  ReactDOMServer.renderToNodeStream(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  ).pipe(res)
})

export default router
