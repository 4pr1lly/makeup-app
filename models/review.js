'use strict';
/*
module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        name: DataTypes.STRING
      }, {});
      Review.associate = function(models) {
        Review.belongsToMany(models.Review, {
          through: 'Review_id',
          foreignKey: 'category_id',
          foreignKey: 'product_type_id',
          foreignKey: 'brand_id',
          foreignKey: 'user_id',
          //otherKey: ''
        })
      };
      return Review;
};
*/

module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
      name: DataTypes.STRING
    }, {});
    category.associate = function(models) {
    // category.belongsToMany(models.Review, {
    // through: 'category_id',
        //foreignKey: '',
        //otherKey: ''
      //})
    };
    return category;
  };
  /*
  module.exports = (sequelize, DataTypes) => {
    const productType = sequelize.define('Product_Type', {
        name: DataTypes.STRING
      }, {});
      productType.associate = function(models) {
        productType.belongsToMany(models.Review, {
          through: 'Product_Type_id',
          //foreignKey: '',
          //otherKey: ''
        })
      };
      return productType;
  }
  */