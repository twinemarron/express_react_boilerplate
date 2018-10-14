import * as express from 'express'
import router from './routes/serverRoutes'

const app = express()

const PORT: number = 3000

app.use(express.static('public'))

app.use('/', router)

app.listen(PORT, (): void => {
  global.console.log(`app listening @ ${PORT}`)
  return
})
// app.listen(PORT)

