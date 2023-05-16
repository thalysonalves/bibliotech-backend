//importando dependencias e arquivos
const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')

//definindo o modelo e seus atributos
const Emprestimo = sequelize.define('emprestimos', {
    livro: DataTypes.STRING,
    autor: DataTypes.STRING,
    tombo: DataTypes.INTEGER,
    aluno: DataTypes.STRING,
    turma: DataTypes.STRING,
    serie: DataTypes.INTEGER,
    data: DataTypes.STRING,
    data_real: DataTypes.STRING,
    status: DataTypes.BOOLEAN
})

module.exports = Emprestimo;