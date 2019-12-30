import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import path from 'path'

const app = express()

mongoose.connect('mongodb+srv://reactbox:reactbox@meubanco-tgxc0.mongodb.net/reactbox?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'temp')))
app.use(routes)
app.listen(3001)
