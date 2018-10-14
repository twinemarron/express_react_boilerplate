import * as React from 'react'
import { renderRoutes } from 'react-router-config'

const Html = props => {
  console.log('props: ', props);
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app">{renderRoutes(props.route.routes)}</div>
        <script src="/public/js/client.bundle.js" />
      </body>
    </html>
  )
}

export default Html
