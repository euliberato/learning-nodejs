import express from 'express'
import routes from './routes.js'

const app = express()

//Indicar para o ExpressJS ler o body com JSON
app.use(express.json())

//Rotas
app.use(routes)

export default app
