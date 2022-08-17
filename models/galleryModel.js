const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    images:{
        link:{
            type:String,
            required:[true,'Must have a String']
        }
    }
})
const Gallery = mongoose.model('galleries', gallerySchema);

module.exports = Gallery;