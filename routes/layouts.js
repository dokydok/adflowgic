var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {

    mongoose.model('layouts').find(function (err, items) {
        res.send(items);
    });
});

module.exports = router;