require('dotenv').config()
require("dotenv-safe").config({
  allowEmptyValues: true
})

const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

app = express()

app.use(serveStatic(__dirname + "/dist"))
const port = process.env.PORT || 3139
const hostname = '127.0.0.1'

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});