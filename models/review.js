'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    categoryId: DataTypes.INTEGER,
    productTypeId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    price: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.users, {foreignKey: 'userId'})
    Review.belongsTo(models.brand, {foreignKey: 'brandId'})
    Review.belongsTo(models.category, {foreignKey: 'categoryId'})
    Review.belongsTo(models.ProductType, {foreignKey: 'productTypeId'})

         };
         return Review;
      
};