const express = require('express')
const router = express.Router()
const Announcement = require('../models/announcements.js')

router.get('/', (req, res) => {
  Announcement.find()
    .then(announcements => res.render('home.pug', {announcements}))
    .catch(console.log(this.err))
})

module.exports = router
