var express = require('express');
var router = express.Router();
var models = require('../models');
var Listing = require('../models').Listing;
var session = require('express-session');


router.get('/home', function(req, res) {
  var sess = req.session;
  console.log(sess.email);
  res.render('home', {
    sess: sess
  });
});

router.post('/login',function(req,res){
  var sess = req.session;
    return models.User.count({ where: { email: req.body.email } && { password: req.body.password } })
      .then(count => {
        if (count !== 0) {
          sess.email=req.body.email;
          res.redirect('/user');
        }
        res.render('login_error', {
          sess: sess
        });
    });
});

module.exports = router;
