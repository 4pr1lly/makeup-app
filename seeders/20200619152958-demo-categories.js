'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
          name:'Face',
      },
      {
          name:'Eyes',
      },
      {
          name:'Lips',
          
      },
      {
        name:'Body',
      },
      {
        name:'Skincare',
       
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {})
   
  }
};
