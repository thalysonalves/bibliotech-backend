'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('emprestimos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      
      livro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tombo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      turma: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serie: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('emprestimos')
  }
};
