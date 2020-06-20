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

    // Review.belongsToMany(models.Review, {
    //  through: 'Review_id',
   
         };
         return Review;
      
};