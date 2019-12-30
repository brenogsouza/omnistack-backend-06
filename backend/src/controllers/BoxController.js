import Box from '../models/Box'

class BoxController {
  async store (req, res) {
    const box = await Box.create(req.body)

    return res.json(box)
  }

  async show (req, res) {
    // retorna a box o todos os arquivos e usa o relacionamento de files
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } } // ordenando conforme o mongo no decrescente
    })

    return res.json(box)
  }
}

export default new BoxController()
