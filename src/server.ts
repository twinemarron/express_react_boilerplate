import * as express from 'express'

const app = express()
const PORT = 3000

app.listen(PORT, (): void => {
  global.console.log(`app listening @ ${PORT}`)
  return
})

