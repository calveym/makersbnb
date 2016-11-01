var express = require('express');
var router = express.Router();
var models = require('../models');
var Listing = require('../models').Listing;

/* GET home page/listings. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/new_listing', function(req, res) {
  console.log("type:");
  try {
    console.log("1");
    var listing = Listing.create({
      name: req.body.listName,
      description: req.body.listDesc,
      price: req.body.price,
      image: req.body.image
    });
    console.log("This runs");
  } catch (e) {
    console.log(e);
  }

  res.redirect('/');
  console.log("gasjgal");
});

module.exports = router;
