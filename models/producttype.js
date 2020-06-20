'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductType = sequelize.define('ProductType', {
    name: DataTypes.STRING
  }, {});
  ProductType.associate = function(models) {
    
  };
  return ProductType;
};