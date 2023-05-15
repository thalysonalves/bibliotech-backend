//importando dependencias
const db = require('./config')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(db)
//testando a conexão com uma mensagem de 'conectado'
sequelize.authenticate().then(function(){console.log('conectado')}).catch(function(err){
    console.log(`O erro é: ${err}`);
})

module.exports = sequelize;