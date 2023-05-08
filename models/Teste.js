const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')

const Teste = sequelize.define('testes', {
    livro: DataTypes.STRING,
    autor: DataTypes.STRING,
    tombo: DataTypes.INTEGER,
    aluno: DataTypes.STRING,
    turma: DataTypes.STRING,
    serie: DataTypes.INTEGER,
})

module.exports = Teste;