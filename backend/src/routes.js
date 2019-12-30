import express from 'express'
import multer from 'multer'

// CONFIGURES
import multerConfig from './config/multer'

// CONTROLLERS
import BoxController from './controllers/BoxController'
import FileController from './controllers/FileController'

const routes = express.Router()

routes.post('/boxes', BoxController.store)
routes.post('/files', multer(multerConfig).single('file'), FileController.store)

export default routes
