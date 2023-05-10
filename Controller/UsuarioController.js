const Usuario = require('../models/Usuario')

module.exports = {
    async store(req, res){
        const {login, senha} = req.body;
        const usuario = await Usuario.create({login, senha})
        return res.json(usuario)
    },

    async index(req, res){
        const busca = await Usuario.findAll()
        return res.json(busca)
    },

    async update(req, res){

    },

    async login(req, res){
        const login = req.body.login;
        const senha = req.body.senha;

        await Usuario.findOne({where: {login: login}}).then((usuario)=>{
            if(senha == usuario.senha){
                res.redirect('/bibliotech')
            }else{
                return res.send('Senha incorreta')
            }
        })
    }
}