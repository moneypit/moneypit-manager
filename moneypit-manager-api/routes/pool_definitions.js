var express = require('express');
var router = express.Router();

pool_definitions = require('./pool_definitions.json');

router.get('/', function(req, res, next) {
  res.json(pool_definitions);
});

module.exports = router;
