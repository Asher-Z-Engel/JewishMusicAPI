const getAlbums = (req, res) => {
  res.send('get albums')
}

const createAlbum = (req, res) => {
  res.send(req.body)
}

const getSingleAlbum = (req, res) => {
  res.send('get single album')
}

const updateAlbum = (req, res) => {
  res.send(req.body)
}

const deleteAlbum = (req, res) => {
  res.send('delete album')
}

module.exports = {
  getAlbums,
  createAlbum,
  getSingleAlbum,
  updateAlbum,
  deleteAlbum
}