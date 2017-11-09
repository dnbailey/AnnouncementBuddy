const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', { user: '_r3c0n_' })
});

app.get('/announcements', function(req, res) {
  res.render('announcements');
});

app.listen('3000', function() {
  console.log('[*] Listening on port 3000');
})
