import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

const app = express()

mongoose.connect('mongodb+srv://reactbox:reactbox@meubanco-tgxc0.mongodb.net/reactbox?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.listen(3001)
