const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')

const Teste = sequelize.define('testes', {
    livro: DataTypes.STRING,
    aluno: DataTypes.STRING,
    turma: DataTypes.STRING,
    serie: DataTypes.INTEGER,
    data: DataTypes.STRING
})

module.exports = Teste;