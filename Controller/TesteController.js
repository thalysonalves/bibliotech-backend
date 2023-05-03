const Teste = require('../models/Teste')

module.exports = {
    async store(req, res){
        const livro = req.body.livro;
        const aluno = req.body.aluno;
        const turma = req.body.turma;
        const serie = req.body.serie;
        const data = req.body.data;

        const teste = await Teste.create({livro, aluno, turma, serie, data})
        return res.redirect('/')
    },

    async index(req, res){
        const busca = await Teste.findAll()
        return res.json(busca)
    }
}