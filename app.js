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
mongoose.connect('mongodb://localhost:27017', { useMongoClient: true })
  .then(() =>  console.log('Connection to database succesful.'))
  .catch((err) => console.error(err))

// Routes
app.use('/', require('./routes/index.js'))
app.use('/admin', require('./routes/announcements.js'))
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/tv', (req, res) => {
  res.render('./views/tv.pug');
})
// Server
app.listen('8000', () => {
  console.log('Listening on port 3000')
})
