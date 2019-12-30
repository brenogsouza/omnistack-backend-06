import express from 'express'
import BoxController from './controllers/BoxController'

const routes = express.Router()

routes.post('/boxes', BoxController.store)

export default routes
