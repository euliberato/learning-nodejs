import { consulta } from "../database/conexao.js"

class UsuarioRepository {

    create(usuario) {
        const sql = "INSERT INTO tabela_usuarios SET ?;"
        return consulta(sql, usuario, "Não foi possível criar um novo usuário")
    }

    findAll() {
        const sql = "SELECT * FROM tabela_usuarios;"
        return consulta(sql, "Não foi possível encontrar usuários")
    }

    findById(id) {
        const sql = "SELECT * FROM tabela_usuarios WHERE id=?;"
        return consulta(sql, id, "Não foi possível encontrar o usuário especificado")
    }

    update(usuario, id) {
        const sql = "UPDATE tabela_usuarios SET ? WHERE id=?;"
        return consulta(sql, [usuario, id], "Não foi possível atualizar os dados do usuário especificado")
    }
    
    delete(id) {
        const sql = "DELETE FROM tabela_usuarios WHERE id=?;"
        return consulta(sql, id, "Não foi possível excluir os dados do usuário especificado")
    }

}

export default new UsuarioRepository()
