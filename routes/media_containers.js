var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    mongoose.model('media_containers').find()/*.populate('media')*/.exec(function (err, items) {
        res.send(items);
    });
});
router.get('/:id', function(req, res) {
    mongoose.model('media_containers').find({_id : req.params.id}).populate('media').exec(function (err, items) {
        res.send(items);
    });
});

module.exports = router;