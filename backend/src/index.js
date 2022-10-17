import viewEngine from './configs/viewConfig'
import initRouter from './router/web'
import { connection } from './configs/connectDB'
const express = require('express')
const app = express()
require('dotenv').config() // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(process.env)
const port = process.env.PORT
viewEngine(app)
initRouter(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})