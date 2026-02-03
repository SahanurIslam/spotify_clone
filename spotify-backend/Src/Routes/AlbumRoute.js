const AlbumController = require('../Controllers/AlbumController');
const express = require('express');
const upload = require('../Middleware/Multer');

const route = express.Router();

// const imageName = {
//     upload.fields()
// }

route.post('/create_album', upload.single('image'), AlbumController.addAlbum);
route.get('/list_album', AlbumController.listAlbum);
route.delete('/remove_album/:id',AlbumController.removeAlbum);

module.exports = route;