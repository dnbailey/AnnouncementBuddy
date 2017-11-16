const mongoose = require('mongoose')

let announcementSchema = new mongoose.Schema({
  title: String,
  ann: String,
  datebeg: String,
  dateend: String
})

module.exports = mongoose.model('Announcement', announcementSchema);
