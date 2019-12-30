import File from '../models/File'

class FileController {
  async store (req, res) {
    // criando um arquivo
    console.log(req.file)
    return res.send('ok')
  }
}

export default new FileController()
