var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {

    mongoose.model('media').find(function (err, items) {
        res.send(items);
    });
});
/* GET New Media page. */
router.get('/new', function(req, res) {
    res.render('new_media', { title: 'Add New Media' });
});

module.exports = router;