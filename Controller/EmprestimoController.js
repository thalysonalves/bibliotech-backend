//importando dependencias e arquivos
const Emprestimo = require('../models/Emprestimo')
const moment = require('moment')

module.exports = {
    //função de armazenar dados (chamada no método POST)
    async store(req, res){
        //chamando cada dado separadamente por cada campo de formulário
        const livro = req.body.livro;
        const autor = req.body.autor;
        const tombo = req.body.tombo;
        const aluno = req.body.aluno;
        const turma = req.body.turma;
        const serie = req.body.serie;
        // const{livro, autor, tombo, aluno, turma, serie} = req.body; //linha para testes
        //a data é adicionada de forma automática com 15 dias a mais
        const data_real = moment().subtract(15, 'days').format()
        const data = moment().subtract(15, 'days').format("DD/MM/YYYY")
        //enviando os dados usando função Model.create (sequelize)
        await Emprestimo.create({livro, autor, tombo, aluno, turma, serie, data_real, data}).then((result)=>{
            return res.json(result)
        })
    },
    //função de listar todos os dados da tabela de empréstimos
    async index(req, res){
        //buscando todos os dados e criando uma função com parametro 'emprestimos'
        await Emprestimo.findAll().then((emprestimos)=>{
            //transformando a busca em um array json
            const emprestimosJSON = emprestimos.map(e => e.toJSON())
            //percorrendo cada item do array com forEach
            emprestimosJSON.forEach(e => {
                //armazenando a data limite de cada item e a data atual em constantes
                const dc = moment(e.data_real)
                const h = moment().format()
                if(moment(h).isSameOrAfter(moment(dc))){ //caso o dia de hoje seja o mesmo ou após a data limite
                    //mudar o status do item para true (pendente)
                    Emprestimo.update({status: true}, {where: {
                        id: e.id
                    }})
                }
            })
        })
        //retornando em json a busca normal
        await Emprestimo.findAll().then((emprestimos)=>{
            return res.json(emprestimos)
        })
    },
    //função que deleta itens
    async delete(req, res){
        //busca o item por id e deleta
        const id = req.params.id;
        await Emprestimo.destroy({where:{id:id}})
        return res.json('deletado')
    }
}