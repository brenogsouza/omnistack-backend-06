// define configurações do multer

import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const multerConfig = {
  dest: path.resolve(__dirname, '..', '..', 'temp'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'temp'))
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        file.key = `${hash.toString('hex')}-${file.originalname}`

        cb(null, file.key)
      })
    }
  })
}
export default multerConfig
