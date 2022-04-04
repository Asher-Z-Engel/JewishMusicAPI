const express = require('express')
const app = express()

const albums = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Jewish Music API</h1>')
})

app.get('/api/albums', (req, res) => {
  res.json(albums)
})
app.get('/api/albums/:albumID', (req, res) => {
  console.log(req.params)
  const { albumID } = req.params;
  const requestedAlbum = albums.find(album => album.id === Number(albumID))
  res.json(requestedAlbum)
})

app.listen(5000, () => console.log('JM API is listening on port 5000'))