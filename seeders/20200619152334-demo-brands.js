'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('brands', [
      {
        name: 'Anastasia Beverly Hill'
      },
      {
        name: 'Almay'
      },
      {
        name: 'Aveeno'
      },
      {
        name: 'Aquaphor'
      },
      {
        name: 'Bare Republic'
      },
      {
        name: 'bareMinerals'
      },
      {
        name: 'Beauty Bakerie'
      },
      {
        name: 'Benefit Cosmetics'
      },
      {
        name: 'Biore'
      },
      {
        name: 'CeraVe'
      },
      {
        name: 'Clinique'
      },
      {
        name: 'ColourPop'
      },
      {
        name: 'COVER FX'
      },
      {
        name: 'CoverGirl'
      },
      {
        name: 'Dose of Color'
      },
      {
        name: 'e.l.f. Costmetics'
      },
      {
        name: 'Estee Lauder'
      },
      {
        name: 'FLOWER Beauty'
      },
      {
        name: 'House of Lashes'
      },
      {
        name: 'Honest Beauty'
      },
      {
        name: 'IT Cosmetics'
      },
      {
        name: 'J.Cat Beauty'
      },
      {
        name: 'Kate Somerville'
      },
      {
        name: 'LOreal'
      },
      {
        name: 'L.A. Girl'
      },
      {
        name: 'Lancome'
      },
      {
        name: 'Laura Mercier'
      },
      {
        name: 'Lilly Lashes'
      },
      {
        name: 'Lime Crime'
      },
      {
        name: 'LORAC'
      },
      {
        name: 'Lottie London'
      },
      {
        name: 'MAC'
      },
      {
        name: 'Makeup Revolution'
      },
      {
        name: 'Mario Badescu'
      },
      {
        name: 'Milani'
      },
      {
        name: 'Morphe'
      },
      {
        name: 'NABLA'
      },
      {
        name: 'Neutrogena'
      },
      {
        name: 'Nivea'
      },
      {
        name: 'No7'
      },
      {
        name: 'NUDESTIX'
      },
      {
        name: 'NYX Professional Makeup'
      },
      {
        name: 'Ofra Cosmetics'
      },
      {
        name: 'Olay'
      },
      {
        name: 'Pixi'
      },
      {
        name: 'PUR'
      },
      {
        name: 'Revlon'
      },
      {
        name: 'Smashbox'
      },
      {
        name: 'Tarte'
      },
      {
        name: 'Too Faced'
      },
      {
        name: 'UOMA Beauty'
      },
      {
        name: 'Wet n Wild'
      },
      {
        name: 'ZOEVA'
      },
      {
        name: 'Essence'
      },
      {
        name: 'Other'
      },

    ])
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
