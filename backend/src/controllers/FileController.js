import File from '../models/File'
import Box from '../models/Box'

class FileController {
  async store (req, res) {
    const box = await Box.findById(req.params.id) // box do banco de dados

    // crinado um file
    const file = await File.create({
      title: req.file.originalname, // nome do arquivo
      path: req.file.key // caminho do multer config
    })

    box.files.push(file) // adicionando uma nova informação no array
    await box.save()

    req.io.sockets.in(box._id).emit('file', file) // para receber uma mensagem realtime
    // criando um arquivo
    return res.json(file)
  }
}

export default new FileController()
