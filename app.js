const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express()

// Setup Views with Pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Public Files
app.use(express.static('public'))

// Parse form and urls
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/announcements', { useMongoClient: true })
  .then(() =>  console.log('Connection to database succesful.'))
  .catch((err) => console.error(err))

// Routes
app.use('/', require('./routes/index.js'))
app.use('/admin', require('./routes/announcements.js'))

// Server
app.listen('3000', () => {
  console.log('Listening on port 3000')
})
