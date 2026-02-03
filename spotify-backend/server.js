const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('../spotify-backend/Src/Config/ConnectDb');

// App config
const app = express();
const PORT = process.env.PORT || 8000;

// Import Route
const songRoute = require('./Src/Routes/SongRoute');
const albumRoute = require('./Src/Routes/AlbumRoute');

const connectCloudinary = require('./Src/Config/Cloudinary');
connectCloudinary()

// Middlewares
app.use(express.json());
app.use(cors());

// Initializing routes
app.use('/api/song',songRoute);
app.use('/api/album',albumRoute);

app.get('/',(req,res)=>{
    res.send("APi IS Working...");
});

// Server listen
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});