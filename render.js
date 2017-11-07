const pug = require('pug');
const express = require('express');
const app = express();

const compiledFunction = pug.compileFile('template.pug');
const compiledFunction1 = pug.compileFile('template2.pug')
app.get('/', function(req, res) {
  res.send(compiledFunction({
    user: '_r3c0n_'
  }));
});
app.get('/announcements', function(req, res) {
  res.send(compiledFunction1({
    announcement: 'hhhh',
    datebeg: '8-1-17',
    dateend: '8-6-17',
  }));
});
app.listen('1000', function() {
  console.log('[*] Listening on port 3000');
})
