'use strict';

const estudiante = require('../models').estudiante;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await estudiante.sync();

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('estudiante');
    
  }
};
