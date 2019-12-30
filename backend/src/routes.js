import express from 'express'
import multer from 'multer'

// CONFIGURES
import multerConfig from './config/multer'

// CONTROLLERS
import BoxController from './controllers/BoxController'
import FileController from './controllers/FileController'

const routes = express.Router()

// ROSTAS GET
routes.get('/boxes/:id', BoxController.show)

// ROTAS POST
routes.post('/boxes', BoxController.store)
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store)

export default routes
