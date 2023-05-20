//Esse arquivo terá 2 elementos essenciais
//Porta e Listen do servidor

import app from './src/app.js'

import conexao from './infra/conexao.js'

const port = 3000

conexao.connect((erro) => {
    if(erro) {
        console.log('Conexão falhou!')
    } else {
        console.log('Conexão funcionou!')
        app.listen(port, () => {
            console.log(`Servidor rodando no endereço http://localhost:${port}`)
        })        
    }
})

