const express = require('express')
const server = express()

const quotesRouter = require('./quotes/quotesRouter')

server.use(express.json());
server.use('/quotes', quotesRouter)

server.get('/', (req, res) => {
  res.status(200).json({api: 'working'})
})


module.exports = server