const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')

const Usuario = sequelize.define('usuarios', {
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
});

module.exports = Usuario;