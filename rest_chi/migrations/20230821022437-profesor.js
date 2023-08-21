'use strict';

const profesor = require('../models').profesor;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await profesor.sync();

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('profesor');
    
  }
};
