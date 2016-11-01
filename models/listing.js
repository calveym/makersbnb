'use strict';

module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING
    }
  });
  return Listing;
};
