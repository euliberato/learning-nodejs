import conexao from "../database/conexao.js"

class UsuarioController {

    async index(req, res){
        const sql = "SELECT * FROM tabela_usuarios;"
        conexao.query(sql, (erro, resultado) => {
             if(erro) {
                 console.log(erro)
                 res.status(404).json({ 'erro': erro })
             } else {
                 res.status(200).json(resultado)
             }
        })
    }

    show(req, res){
        const id = req.params.id
        const sql = "SELECT * FROM tabela_usuarios WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
            const linha = resultado[0]
            if(erro) {
                console.log(erro)
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(linha)
            }
        })
    }  

    store(req, res){
        const usuario = req.body
        const sql = "INSERT INTO tabela_usuarios SET ?;"
        conexao.query(sql, usuario, (erro, resultado) => {
            if(erro) {
                console.log(erro)
                res.status(400).json({ 'erro': erro })
            } else {
                res.status(201).json(resultado)
            }
        })
    }   

    update(req, res){
        const id = req.params.id
        const usuario = req.body
        const sql = "UPDATE tabela_usuarios SET ? WHERE id=?;"
        conexao.query(sql, [usuario, id], (erro, resultado) => {
            if(erro) {
                console.log(erro)
                res.status(400).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    delete(req, res){
        const id = req.params.id
        const sql = "DELETE FROM tabela_usuarios WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) => {
            if(erro) {
                res.status(404).json({ 'erro': erro })
            } else {
                res.status(200).json(resultado)
            }
        })
    }

}

//Padrão Singleton: uma única instância da classe para o projeto todo
export default new UsuarioController()