var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    Layout.find().exec(function (err, items) {
        res.send(items);
    });
});
router.get('/:id/lean', function(req, res) {
    Layout.findOne({_id : req.params.id}).exec(function (err, items) {
        res.send(items);
    });
});
router.get('/:id', function(req, res) {
   Layout.findOne({_id : req.params.id})
       .populate('media_containers')
       .exec(function (err, media_containers) {
           var options = {
               path : 'media_containers.media_list',
               model : 'media'
           }
           Layout.populate(media_containers, options, function(err, media){
               var options = {
                   path : 'media_containers.media_list.advertiser',
                   model : 'advertisers'
               }
               Layout.populate(media, options, function(err, advertisers){
                   res.json(advertisers);
               });
           });
    });
});

module.exports = router;