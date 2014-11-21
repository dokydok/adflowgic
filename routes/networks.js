var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    Network.find(function (err, items) {
        res.send(items);
    });
});
router.get('/:id', function(req, res) {
    Network.findOne({_id : req.params.id}, function (err, items) {
        res.send(items);
    });
});

module.exports = router;