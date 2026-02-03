const Album = require("../Models/AlbumModel");
const cloudinary = require('cloudinary').v2;
class AlbumController {
    async addAlbum(req, res) {
      
        try {
            const existAlbum = await Album.findOne({ name: req.body.name });
            if (existAlbum) {
                return res.status(400).json({ success: false, message: "Album Alredy Exist.", data: existAlbum });
            }
            const name = req.body.name;
            const desc = req.body.desc;
            const bgColor = req.body.bgColor;
            const imageFile = req.file;

            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

            const albumData = {
                name,
                desc,
                bgColor,
                image: imageUpload.secure_url,
            }

            const save = await Album.create(albumData);
            return res.status(200).json({ success: true, message: "Album Data Added Successfully.", data: save });

        } catch (error) {
            console.error(error);
            return res.status(500).send('Server Error');
        }
    }

    async listAlbum(req, res) {

        try {
            const getAllAlbum = await Album.find({});
            if (!getAllAlbum) {
                return res.status(400).json({ success: false, message: "Album Not Found.", data: getAllAlbum });
            }

            return res.status(200).json({ success: true, message: "Get All Album Data Successfully.", data: getAllAlbum });

        } catch (error) {
            console.error(error);
            return res.status(500).send('Server Error');
        }
    }

    async removeAlbum(req, res) {
        
        const { id } = req.params;
        try {
            const existAlbum = await Album.findById(id);
            if (!existAlbum) {
                return res.status(400).json({ success: false, message: "Album Not Found." });
            }

            const deleteAlbum = await Album.findByIdAndDelete(id);
            if (!deleteAlbum) {
                return res.status(400).json({ success: false, message: "Album Not Deleted." });
            }

            return res.status(200).json({ success: true, message: "Album Deleted Successfully.", data: deleteAlbum });

        } catch (error) {
            console.error(error);
            return res.status(500).send('Server Error');
        }
    }

}
module.exports = new AlbumController;