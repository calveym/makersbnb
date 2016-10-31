var express = require('express');
var router = express.Router();

/* GET home page/listings. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/new_listing', function(req, res, next) {
  var listing = Listing.build({
    name: 'flat',
    description: '2 bedroms',
    price: 45,
    image: 'jhjhjh'
  });
  listing.save();
  res.redirect('/');
});





module.exports = router;
