var express = require('express');
var router = express.Router();

/* GET home page/listings. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/new_listing', function(req, res, next) {
  Listing.create({
    name: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  });

  res.rediret('/');
});





module.exports = router;
