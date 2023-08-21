'use strict';

const curso = require('../models').curso;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await curso.sync();

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('curso');

  }
};
