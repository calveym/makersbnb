var sequelize = require('sequelize');

var Listing = sequelize.define('listing', {
  id: {
    type: sequelize.UUIDV1,
    field: 'id'
  },
  name: {
    type: sequelize.STRING,
    field: 'name'
  },
  description: {
    type: sequelize.TEXT,
    field: 'description'
  },
  price: {
    type: sequelize.DOUBLE,
    field: 'field'
  },
  image: {
    type: sequelize.STRING
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
