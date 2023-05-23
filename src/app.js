import express from 'express'
import UsuarioController from './app/controllers/UsuarioController.js'

const app = express()

//Indicar para o ExpressJS ler o body com JSON
app.use(express.json())

//Rotas
app.get('/usuarios', UsuarioController.index)
app.get('/usuarios/:id', UsuarioController.show)
app.post('/usuarios', UsuarioController.store)
app.put('/usuarios/:id', UsuarioController.update)
app.delete('/usuarios/:id', UsuarioController.delete)

export default app
