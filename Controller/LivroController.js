const Livro = require('../models/Livro')

module.exports = {
    async store(req, res){
        const {titulo, autor, edicao, editora, ano, quantidade} = req.body;

        const livro = await Livro.create({titulo, autor, edicao, editora, ano, quantidade})
        return res.json(livro)
    },

    async index(req, res){
        Livro.findAll().then((livros)=>{
            return res.json(livros)
        })
    },

    async update(req, res){
        const {titulo, autor, edicao, editora, ano, quantidade} = req.body;
        const id = req.params.id;

        const livro = Livro.update({titulo, autor, edicao, editora, ano, quantidade}, {
            where: {
                id: id
            }
        })
        return res.json(livro)
    },

    async delete(req, res){
        const id = req.params.id;
        
        await Livro.destroy({
            where: {
                id: id
            }
        })
        return res.json("livro deletado")
    }
}