var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://localhost/makersbnb_test');

var Listing = sequelize.define('listing', {
  name: {
    type: Sequelize.STRING,
    field: 'name'
  },
  description: {
    type: Sequelize.TEXT,
    field: 'description'
  },
  price: {
    type: Sequelize.INTEGER,
    field: 'field'
  },
  image: {
    type: Sequelize.STRING
  }
});

Listing.sync({force:true}).then(function(){
  return Listing.create({
    name: 'Broadmoore Hospital',
    description: 'the place for Jack the Ripper',
    price: 55,
    image: "http://www.slate.com/content/dam/slate/blogs/browbeat/2015/01/06/wesshining.jpg.CROP.promovar-mediumlarge.jpg"
  });
});
