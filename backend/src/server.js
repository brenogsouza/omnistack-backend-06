import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import path from 'path'
import cors from 'cors'

const app = express()
app.use(cors()) // para todo poder utilizar a aplicação

const server = require('http').Server(app)
const io = require('socket.io')(server)

// toda vez que receber um conexao do usuário para deixar um usuário em sala específica
io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box)
  })
})

mongoose.connect('mongodb+srv://reactbox:reactbox@meubanco-tgxc0.mongodb.net/reactbox?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

app.use((req, res, next) => { req.io = io; return next() })
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))
app.use(routes)

server.listen(process.env.PORT || 3001)
