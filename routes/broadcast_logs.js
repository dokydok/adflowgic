var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    mongoose.model('broadcast_logs').find(function (err, items) {
        res.send(items);
    });
});
router.get('/:id', function(req, res) {
    mongoose.model('broadcast_logs').find({_id : req.params.id}, function (err, items) {
        res.send(items);
    });
});

module.exports = router;