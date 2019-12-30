import Box from '../models/Box'

class BoxController {
  async store (req, res) {
    const box = await Box.create(req.body)

    return res.json(box)
  }

  async show (req, res) {
    // retorna a box o todos os arquivos
    const box = await Box.findById(req.params.id)

    return res.json(box)
  }
}

export default new BoxController()
