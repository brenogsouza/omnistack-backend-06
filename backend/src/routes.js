const express = require('express')
const multer = require('multer')

// CONFIGURES
const multerConfig = ('./config/multer')

// CONTROLLERS
const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')

const routes = express.Router()

// ROSTAS GET
routes.get('/boxes/:id', BoxController.show)

// ROTAS POST
routes.post('/boxes', BoxController.store)
routes.post('/boxes/:id/files', multer({ multerConfig }).single('file'), FileController.store)

module.exports = routes
