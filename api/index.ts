import * as fs from 'fs'
import * as https from 'https'
import * as express from 'express'
import * as path from 'path'

const frontendPort = 3000
const backendPort = 4000

// start frontend parcel dev server
const Parcel = require('parcel-bundler')
const bundler = new Parcel(path.join(__dirname, '../app/index.html'))
const frontendServer = bundler.serve(frontendPort)

const app = express()

app.all('/', (req, res) => {
  res.send('Hello from Express.')
})

// start backend dev server
app.listen(backendPort, () => {
  console.log(`API listening on port ${backendPort}`)
})
