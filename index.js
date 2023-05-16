//importando dependencias
require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes')
//permitindo que a aplicação interprete informações json
app.use(express.json())
//ligando o servidor e usando o middleware de rotas
app.use(router)
app.listen(3000)