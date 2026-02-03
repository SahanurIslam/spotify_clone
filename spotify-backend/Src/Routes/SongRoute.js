const SongController = require('../Controllers/SongController');
const express = require('express');
const upload = require('../Middleware/Multer');

const route = express.Router();

// const imageName = {
//     upload.fields()
// }

route.post('/create_song', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'audio', maxCount: 1 }]), SongController.addSong);
route.get('/list_song', SongController.listSong);
route.delete('/remove_song/:id',SongController.removeSong);

module.exports = route;