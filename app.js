const express = require('express')
const app = express()

const albums = require('./data')

app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the Jewish Music API</h1>')
})

app.get('/api/albums', (req, res) => {
  const { name, artist, genre } = req.query;
  let newAlbums = [...albums]
  if (name) {
    newAlbums = albums.filter(album => {
      return album.name === name;
    })
  }
  if (artist) {
    newAlbums = newAlbums.filter(album => album.artist === artist)
  }
  if (genre) {
    newAlbums = newAlbums.filter(album => album.genre === genre)
  }
  res.json(newAlbums)
})
app.get('/api/albums/:albumID', (req, res) => {
  const { albumID } = req.params;
  const requestedAlbum = albums.find(album => album.id === Number(albumID))
  if (!requestedAlbum) {
    return res.status(404).send('Album not found...')
  }
  res.status(200).json(requestedAlbum)
})

app.listen(5000, () => console.log('JM API is listening on port 5000'))