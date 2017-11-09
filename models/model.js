var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
var AnnSchema = mongoose.Schema({
    id: new ObjectID(),
    title: String,
    announcement: String,
    datbeg: Date,
    datend: Date,

});
