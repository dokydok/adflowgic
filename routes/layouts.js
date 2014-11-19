var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    mongoose.model('layouts').find().exec(function (err, items) {
        res.send(items);
    });
});
router.get('/:id', function(req, res) {
    mongoose.model('layouts').find({_id : req.params.id}).exec(function (err, items) {
        res.send(items);
    });
});

module.exports = router;