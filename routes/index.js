var express = require('express');
var router = express.Router();
var app = express()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("./index/index");
});

module.exports = router;
