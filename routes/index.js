var express = require('express');
var router = express.Router();
var models = require('../models');
var Listing = require('../models').Listing;

/* GET home page/listings. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/new_listing', function(req, res) {
  try {
    var listing = Listing.create({
      name: 'flat',
      description: '2 bedrooms',
      price: 45,
      image: 'jhjhjh'
    });
  } catch (e) {
  }

  res.redirect('/');
});

module.exports = router;
