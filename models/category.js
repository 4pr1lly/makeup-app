'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    
  
  };
  return Category;
};