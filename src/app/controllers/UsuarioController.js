import UsuarioRepository from '../repositories/UsuarioRepository.js'

class UsuarioController {

    async index(req, res){
        const result = await UsuarioRepository.findAll()
        res.json(result)
    }

    async show(req, res){
        const id = req.params.id
        const result = await UsuarioRepository.findById(id)
        res.json(result)
    }  

    async store(req, res){
        const usuario = req.body
        const result = await UsuarioRepository.create(usuario)
        res.json(result)
    }   

    async update(req, res){
        const id = req.params.id
        const usuario = req.body
        const result = await UsuarioRepository.update(usuario, id)
        res.json(result)
    }

    async delete(req, res){
        const id = req.params.id
        const result = await UsuarioRepository.delete(id)
        res.json(result)
    }

}

//Padrão Singleton: uma única instância da classe para o projeto todo
export default new UsuarioController()