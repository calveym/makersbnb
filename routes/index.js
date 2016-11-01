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
      name: 'flat',
      description: '2 bedrooms',
      price: 45,
      image: 'jhjhjh'
    });
    console.log("This runs");
  } catch (e) {
    console.log(e);
  }

  res.redirect('/');
  console.log("gasjgal");
});

module.exports = router;
