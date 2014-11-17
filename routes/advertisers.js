var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET advertisers listing. */
router.get('/', function(req, res) {

    mongoose.model('advertisers').find(function (err, items) {
        res.json(items);
    });
});
/* GET New Advertiser page. */
router.get('/new', function(req, res) {
    res.render('new_advertiser', { title: 'Add New Advertiser' });
});
/* POST to Add advertiser */
router.post('/', function(req, res) {

    // Get our form values. These rely on the "name" attributes
    var name = req.body.name;
    var address = req.body.address;

    var Advertiser = mongoose.model('advertisers');
    var advertiser = new Advertiser({name : name, address : address});

    advertiser.save(function (err, advertiser) {
        if (err) return console.error(err);
    });

});

module.exports = router;