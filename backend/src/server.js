import express from 'express'

const app = express()
app.get('/', (req, res) => {
  const users = ['']

  return res.json({ users })
})

app.listen(3001)
