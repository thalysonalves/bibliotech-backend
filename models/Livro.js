//importando dependencias e arquivos
const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')
//definindo o modelo e seus atributos
const Livro = sequelize.define('livros', {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    edicao: DataTypes.INTEGER,
    editora: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER
});

module.exports = Livro;