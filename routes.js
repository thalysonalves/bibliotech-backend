//importando dependencias e arquivos
const express = require('express')
const EmprestimoController = require('./Controller/EmprestimoController')
const LivroController = require('./Controller/LivroController')
const UsuarioController = require('./Controller/UsuarioController')
const router = express.Router()

// Rotas de livros
    router.get('/buscar-livros', LivroController.index)
    router.post('/postar-livros', LivroController.store)
    router.put('/livros/:id', LivroController.update)
    router.delete('/livros/:id', LivroController.delete)

// Rotas de empréstimo
    router.get('/bibliotech', EmprestimoController.index)
    router.post('/bibliotech', EmprestimoController.store)
    router.delete('/bibliotech/:id', EmprestimoController.delete)

// Rotas de usuário
    router.get('/usuarios', UsuarioController.index)
    router.post('/cadastro-usuario', UsuarioController.store)
    router.post('/', UsuarioController.login)

module.exports = router;