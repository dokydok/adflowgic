var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    mongoose.model('media').find()/*.populate('advertiser')*/.exec(function (err, items) {
        res.json(items);
    });
});
router.get('/:id', function(req, res) {
    mongoose.model('media').find({_id:req.params.id})/*.populate('advertiser')*/.exec(function (err, items) {
        res.json(items);
    });
});
/* GET New Media page. */
router.get('/new', function(req, res) {
    res.render('new_media', { title: 'Add New Media' });
});

module.exports = router;