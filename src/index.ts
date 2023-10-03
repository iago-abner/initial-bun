import express from 'express'
import { routes } from './routes'

const port = 3000
const app = express()

app.use(express.json())

app.use(routes)

app.listen(port)

console.log(
  `Server is running at port:${port}`
);
