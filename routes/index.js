var express = require('express');
var router = express.Router();
var models = require('../models');
var Listing = require('../models/listing');

/* GET home page/listings. */
router.get('/', function(req, res, next) {
  res.render('index');
  console.log("3");
});

router.post('/new_listing', function(req, res) {
  try {
    console.log("1");
    var listing = Listing.build({
      name: 'flat',
      description: '2 bedroms',
      price: 45,
      image: 'jhjhjh'
    });
  } catch (e) {
    console.log(e);
  }

  console.log("4");
  // listing.save()
  //   .error(function(err) {
  //     console.log("Error");
  //   })
  //   .success(function() {
  //     console.log("Success");
  //   });
  res.redirect('/');
  console.log("gasjgal");
});

module.exports = router;
