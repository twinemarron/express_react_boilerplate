import Html from '../containers/Html'
import App from '../containers/App'

const routes = [
  {
    component: Html,
    routes: [
      {
        path: '/',
        exact: true,
        component: App,
      },
    ],
  },
]

export default routes
