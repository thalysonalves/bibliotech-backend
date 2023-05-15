//importando dependencias e arquivos
const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')
//definindo o modelo e seus atributos
const Usuario = sequelize.define('usuarios', {
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
});

module.exports = Usuario;