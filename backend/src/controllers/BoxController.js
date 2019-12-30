import Box from '../models/Box'

class BoxController {
  async store (req, res) {
    const box = await Box.create(req.body)

    return res.json(box)
  }
}

export default new BoxController()
