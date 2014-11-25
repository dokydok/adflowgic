var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ADFlowgic' });
});

router.get('/ng', function(req, res) {
  res.sendfile('views/angular-test.html', { title: 'ADFlowgic' });
});

module.exports = router;
