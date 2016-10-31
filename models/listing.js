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

});

Listing.sync({force:true}).then(function(){
  return Listing.create({
    name: 'Broadmoore Hospital',
    description: 'the place for Jack the Ripper',
    price: 55
  });
});
