'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('livros', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      autor: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      edicao: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      editora: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      ano: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },

      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('livros')
  }
};
