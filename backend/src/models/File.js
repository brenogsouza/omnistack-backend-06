// model que representa onde será armazenado os arquivos

import mongoose from 'mongoose'

const File = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

// campo virtual para disponibilizar URL para o front
File.virtual('url').get(function () {
  const url = process.env.URL || 'http://localhost:3001'

  return `${url}/files/${encodeURIComponent(this.path)}`
})

export default mongoose.model('File', File)
