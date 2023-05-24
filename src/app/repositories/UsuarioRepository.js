import conexao from "../database/conexao.js"

class UsuarioRepository {

    create(usuario) {
        const sql = "INSERT INTO tabela_usuarios SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, usuario, (erro, resultado) => {
                if(erro) return reject("Não foi possível cadastrar")
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM tabela_usuarios;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) return reject("Não foi possível localizar")
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findById(id) {
        const sql = "SELECT * FROM tabela_usuarios WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject("Não foi possível localizar")
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    update(usuario, id) {
        const sql = "UPDATE tabela_usuarios SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [usuario, id], (erro, resultado) => {
                if(erro) return reject("Não foi possível atualizar")
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }
    
    delete(id) {
        const sql = "DELETE FROM tabela_usuarios WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) return reject("Não foi possível excluir")
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

}

export default new UsuarioRepository()
