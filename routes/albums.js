const express = require('express')
const router = express.Router()
// functions
const {
  getAlbums,
  createAlbum,
  getSingleAlbum,
  updateAlbum,
  deleteAlbum
} = require('../controllers/albums')

router.route('/')
  .get(getAlbums)
  .post(createAlbum)

router.route('/:id')
  .get(getSingleAlbum)
  .patch(updateAlbum)
  .delete(deleteAlbum)

module.exports = router