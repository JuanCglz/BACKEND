const mongoose = require('mongoose')
const keys = require('../config.js')

// revisa tu connectionURL aqui :-) ok
const connectionURL = process.env.DB_CONNECTION_STRING || keys.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
