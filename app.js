const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');
const passport     = require('passport');
const flash        = require('connect-flash');
const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const app          = express()
const configDB = require('./config/database.js');
// Setup Views with Pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Public Files
app.use(express.static('public'))

// Parse form and urls
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'));
app.use(cookieParser());

// Database
mongoose.Promise = global.Promise
mongoose.connect(configDB.url, { useMongoClient: true })
  .then(() =>  console.log('Connection to database succesful.'))
  .catch((err) => console.error(err))

app.use(session({ secret: 'thebestapplicationever' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
require('./config/passport.js')(passport)
// Routes
app.use('/', require('./routes/index.js'));
app.use('/admin', require('./routes/announcements.js'))


// Server
app.listen('3000', () => {
  console.log('[*] Listening on port 3000')
})
