'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Bob',
        username: 'bobby',
        password:'***'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {

  }
};
