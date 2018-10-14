import Html from '../containers/Html'
import App from '../containers/App'
console.log('Html: ', Html)
console.log('App: ', App)

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
