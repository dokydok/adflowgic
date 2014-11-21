var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    MediaContainer.find()/*.populate('media')*/.exec(function (err, items) {
        res.send(items);
    });
});
router.get('/:id/lean', function(req, res) {
    MediaContainer.findOne({_id : req.params.id}).exec(function (err, items) {
        res.send(items);
    });
});
router.get('/:id', function(req, res) {
    MediaContainer.findOne({_id : req.params.id})
            .populate('media_list')
            .exec(function (err, media) {
        var options = {
            path : 'media_list.advertiser',
            model : 'advertisers'
        }
        MediaContainer.populate(media, options, function(err, advertisers){
            res.json(advertisers);
        });
    });
});


module.exports = router;