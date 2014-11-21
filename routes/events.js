var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    EventModel.find(function (err, items) {
        res.send(items);
    });
});
router.get('/:id/lean', function(req, res) {
    EventModel.findOne({_id : req.params.id}, function (err, items) {

        res.send(items);
    });
});
router.get('/:id/', function(req, res) {
    EventModel.findOne({_id : req.params.id})
            .populate('layout')
            .exec(function (err, items1) {
            var options = {
                path : 'layout.media_containers',
                model : 'media_containers'
            }
            EventModel.populate(items1, options, function(err, items2){
                var options = {
                    path : 'layout.media_containers.media_list',
                    model : 'media'
                }
                EventModel.populate(items2, options, function(err, items3){
                    var options = {
                        path : 'layout.media_containers.media_list.advertiser',
                        model : 'advertisers'
                    }
                    EventModel.populate(items3, options, function(err, items4){
                        res.json(items4);
                    });

                });

            });
    });
});

module.exports = router;