var express = require('express');
var router = express.Router();
const fs = require('fs'); 


/* GET home page. */
router.get('/', function(req, res, next) {
  var products = JSON.parse(fs.readFileSync(__dirname + "/../database/products.json"));
  res.render('index', {products});
});

module.exports = router;
