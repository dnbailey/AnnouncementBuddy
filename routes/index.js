const express = require('express')
const router = express.Router()
const Announcement = require('../models/announcements.js')
const passport = require('passport');
const bcrypt   = require('bcrypt-nodejs');

router.get('/', (req, res) => {
  Announcement.find()
    .then(announcements => res.render('index.pug', {announcements}))
    .catch(console.log(this.err))
})
router.get('/login', (req, res) => {
  res.render('login.pug', {message: req.flash('loginMessage')});
});
router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/admin',
  failureRedirect: '/login',
  flashMessage: true
}));
module.exports = router
