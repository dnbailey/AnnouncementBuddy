const express = require('express')
<<<<<<< HEAD
const moment = require('moment')
=======
>>>>>>> 3e6151238c1fb0c64e465ce0f143d38c4d28c142
const router = express.Router()
const Announcement = require('../models/announcements.js')

router.get('/', (req, res) => {
  Announcement.find()
    .then(announcements => res.render('announcements.pug', {announcements}))
    .catch(err => console.log(err))
})
<<<<<<< HEAD

=======
>>>>>>> 3e6151238c1fb0c64e465ce0f143d38c4d28c142
router.post('/', (req, res) => {
  let announcement = new Announcement({
    title: req.body.title,
    ann: req.body.ann,
    datebeg: req.body.datebeg,
    dateend: req.body.dateend
  })
  announcement.save()
  res.redirect('/admin')
<<<<<<< HEAD
})

=======
});
>>>>>>> 3e6151238c1fb0c64e465ce0f143d38c4d28c142
router.get('/:id/delete', function(req, res){
	Announcement.remove({_id: req.params.id})
		.then(res.redirect('/admin'))
    .catch(err => console.log(err))
})
// update
router.get('/:id/edit', (req, res) => {
  Announcement.find({_id: req.params.id})
    .then(announcements => res.render('edit.pug', {
      'title': 'Title',
      'announcements': announcements
    }))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req, res) => {
  const announcement = {
    id: req.params.id,
    title: req.body.title,
    ann: req.body.ann,
    datebeg: req.body.datebeg,
    dateend: req.body.dateend
  }

  Announcement.findByIdAndUpdate(
    announcement.id,
    {$set: {title: announcement.title, ann: announcement.ann, datebeg: announcement.datebeg, dateend: announcement.dateend}},
    {new: true}
  )
    .then(res.redirect('/admin'))
    .catch(err => {
      console.log(err)
      res.redirect('/admin')
    })
})
<<<<<<< HEAD
function autoRemove() {

}

=======
>>>>>>> 3e6151238c1fb0c64e465ce0f143d38c4d28c142
module.exports = router
