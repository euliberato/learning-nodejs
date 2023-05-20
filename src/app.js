import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

app.use(express.json())

//Abaixo: funções auxiliares
function buscarUsuarioPorId(id) {
    return usuarios.filter( selecao => selecao.id == id)
}

function buscaIndexUsuario(id) {
    return usuarios.findIndex( selecao => selecao.id == id )
}

//Rotas
app.get('/usuarios', (req, res)=> {
   const sql = "SELECT * FROM tabela_usuarios;"
   conexao.query(sql, (erro, resultado) => {
        if(erro) {
            console.log(erro)
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
   })
})

app.get('/usuarios/:id', (req, res) => {
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
})

app.post('/usuarios', (req, res) => {
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
})

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM tabela_usuarios WHERE id=?;"
    conexao.query(sql, id, (erro, resultado) => {
        if(erro) {
            res.status(404).json({ 'erro': erro })
        } else {
            res.status(200).json(resultado)
        }
    })
})

app.put('/usuarios/:id', (req, res) => {
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
})

export default app
