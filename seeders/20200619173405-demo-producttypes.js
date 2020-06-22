'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductTypes', [
      {
          name:'Foundation',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name:'Concealer',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name:'Powder',
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        name:'Primer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Contour',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name:'Bronzer',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Blush',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Highlighter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name:'Setting spray',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    name:'Eyeshadow',
    createdAt: new Date(),
    updatedAt: new Date()
},
{
  name:'Eyebrow pomade',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Mascara',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Lashes',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Lip liner',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Lipstick',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Lipgloss',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Eyeliner',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Eye primer',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Makeup remover',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Moisturizer',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Acne Wash',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Body Wash',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name:'Other',
  createdAt: new Date(),
  updatedAt: new Date()
},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductTypes', null, {})
    
  }
};
