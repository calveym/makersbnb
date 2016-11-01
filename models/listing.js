'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('listing', {
    name: {
      type: DataTypes.STRING,
      field: 'name'
    },
    description: {
      type: DataTypes.TEXT,
      field: 'description'
    },
    price: {
      type: DataTypes.INTEGER,
      field: 'price'
    },
    image: {
      type: DataTypes.STRING
    }
  });
  return Listing;
};
