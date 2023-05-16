//Esse arquivo terá 2 elementos essenciais
//Porta e Listen do servidor

import app from './src/app.js'

const port = 3000

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
