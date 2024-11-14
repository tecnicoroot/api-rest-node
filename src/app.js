/**
 * importar os pacotes
 */
import express from 'express'
import routes from './routes.js'

const app = express()

app.use(express.json()) //Indica que o conteúdo do body deve ser interpletado como JSON

app.use(routes)



export default app