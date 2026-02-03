const Song = require("../Models/SongModel");
const cloudinary = require('cloudinary').v2;
class SongController {
    async addSong(req, res) {

        try {
            const existSong = await Song.findOne({ name: req.body.name });
            if (existSong) {
                return res.status(400).json({ success: false, message: "Song Alredy Exist.", data: existSong });
            }
            const name = req.body.name;
            const desc = req.body.desc;
            const album = req.body.album;
            const imageFile = req.files.image[0];
            const audioFile = req.files.audio[0];

            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
            const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

            const songData = {
                name,
                desc,
                album,
                image: imageUpload.secure_url,
                file: audioUpload.secure_url,
                duration
            }

            const save = await Song.create(songData);
            return res.status(200).json({ success: true, message: "Sonag Data Added Successfully.", data: save });

        } catch (error) {
            console.error(error);
            return res.status(500).send('Server Error');
        }
    }

    async listSong(req, res) {
        try {
            const getAllSong = await Song.find({});
            if (!getAllSong) {
                return res.status(400).json({ success: false, message: "Song Not Found.", data: getAllSong });
            }

            return res.status(200).json({ success: true, message: "Get All Sonag Data Successfully.", data: getAllSong });

        } catch (error) {
            console.error(error);
            return res.status(500).send('Server Error');
        }
    }

    async removeSong(req, res) {
        const { id } = req.params;

        try {
            const existSong = await Song.findById(id);
            if (!existSong) {
                return res.status(400).json({ success: false, message: "Song Not Found." });
            }

            const deleteSong = await Song.findByIdAndDelete(id);
            if (!deleteSong) {
                return res.status(400).json({ success: false, message: "Song Not Deleted." });
            }  

            return res.status(200).json({ success: true, message: "Song Deleted Successfully.", data: deleteSong });

        } catch (error) {
            console.error(error);
            return res.status(500).send('Server Error');
        }
    }

}
module.exports = new SongController;