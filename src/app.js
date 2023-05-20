import express from 'express'
const app = express()

app.use(express.json())

//Mock de dados fictícios
const usuarios = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Sérvia', grupo: 'G'},
    
]

//Abaixo: funções auxiliares
function buscarUsuarioPorId(id) {
    return usuarios.filter( selecao => selecao.id == id)
}

function buscaIndexUsuario(id) {
    return usuarios.findIndex( selecao => selecao.id == id )
}

//Rotas da API
app.get('/', (req, res) => {
    res.send('Curso de Node JS!')
})

app.get('/usuarios', (req, res)=> {
   res.send(usuarios)
})

app.get('/usuarios/:id', (req, res) => {
    res.json(buscarUsuarioPorId(req.params.id))
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.status(201).send('Usuário cadastrado com sucesso!')
})

app.delete('/usuarios/:id', (req, res) => {
    let index = buscaIndexUsuario(req.params.id)
    usuarios.splice(index, 1)
    res.send(`Usuário ID: ${req.params.id} excluído com sucesso!`)
})

app.put('/usuarios/:id', (req, res) => {
    let index = buscaIndexUsuario(req.params.id)
    usuarios[index].nome = req.body.nome
    usuarios[index].cpf = req.body.cpf
    usuarios[index].cargo = req.body.cargo
    res.json(usuarios)
    res.send(`Usuário ID: ${req.params.id} atualizado com sucesso!`)
})

export default app
