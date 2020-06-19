'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
          name:'Face',
          // createdAt: new Date(),
          // updatedAt: new Date()
      },
      {
          name:'Eyes',
          // createdAt: new Date(),
          // updatedAt: new Date()
      },
      {
          name:'Lips',
          // createdAt: new Date(),
          // updatedAt: new Date()
      },
      {
        name:'Body',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
        name:'Skincare',
        // createdAt: new Date(),
        // updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
