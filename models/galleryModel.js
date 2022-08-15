const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    gallery:[]
})
const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;