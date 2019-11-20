import express from 'express'
import { RegisterRoutes } from './routes'
import '../controllers/usersController'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './dist/swagger.json'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

RegisterRoutes(app)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(3000, () => {
　console.log('App running at http://localhost:3000')
})


