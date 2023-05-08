const express = require('express')
const EmprestimoController = require('./Controller/EmprestimoController')
const UsuarioController = require('./Controller/UsuarioController')
const router = express.Router()


// Rotas de empréstimo
    router.get('/bibliotech', EmprestimoController.index)
    router.post('/bibliotech', EmprestimoController.store)

// Rotas de usuário
    router.get('/usuarios', UsuarioController.index)
    router.post('/cadastro-usuario', UsuarioController.store)
    router.post('/', UsuarioController.login)

module.exports = router;