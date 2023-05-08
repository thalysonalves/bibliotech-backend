const Teste = require('../models/Teste')

module.exports = {
    async store(req, res){
        const livro = req.body.livro;
        const autor = req.body.autor;
        const tombo = req.body.tombo;
        const aluno = req.body.aluno;
        const turma = req.body.turma;
        const serie = req.body.serie;

        await Teste.create({livro, autor, tombo, aluno, turma, serie, data})
    },

    async index(req, res){
        const busca = await Teste.findAll()
        return res.json(busca)
    }
}