const express = require('express')
const app = express()
const port = 3000

//Acima, foi criado uma requisição do express
//Essa requisição será usada para criar uma instância
//Instância essa que será guardada em app
//E logo apos isso, será definida uma porta para o projeto

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//A rota home, irá fazer uma requisição
//Essa requisição deve ter uma resposta
//Requisição e resposta, ambas passadas por parâmetro
//E a arrow-function retorna uma resposta

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})

//Escutar a chamada que será feita para uma porta
