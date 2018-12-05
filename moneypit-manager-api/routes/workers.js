var express = require('express');
var router = express.Router();

workers = require('./workers.json');

router.get('/', function(req, res, next) {
  res.json(workers);
});

module.exports = router;
