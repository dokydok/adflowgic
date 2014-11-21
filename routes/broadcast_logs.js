var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {
    BroadcastLog.find(function (err, items) {
        res.send(items);
    });
});
router.get('/:id', function(req, res) {
    BroadcastLog.findOne({_id : req.params.id}, function (err, items) {
        res.send(items);
    });
});
router.post('/', function(req, res){
    //time, network, event, media_container, media, status(in, out)
    var time = req.body.time;
    var network = req.body.network_id;
    var event = req.body.event_id;
    var media_container = req.body.media_container_id;
    var media = req.body.media_id;
    var status = req.body.broadcast_status;
    var log = new BroadcastLog({
        time : time,
        network : network,
        event : event,
        media_container : media_container,
        media : media,
        status : status
    });
    log.save();
    res.send(log);
});

module.exports = router;