const express = require('express')
const router = express.Router()
const Announcement = require('../models/announcements.js')

router.get('/', (req, res) => {
  Announcement.find()
<<<<<<< HEAD
    .then(announcements => res.render('index.pug', {announcements}))
=======
    .then(announcements => res.render('home.pug', {announcements}))
>>>>>>> 3e6151238c1fb0c64e465ce0f143d38c4d28c142
    .catch(console.log(this.err))
})

module.exports = router
