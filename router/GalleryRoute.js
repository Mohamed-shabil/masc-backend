const express = require('express');
const galleryController = require('../controller/galleryController.js')
const router = express.Router(); 
const uploads= require('../middleware/upload')
const {protect} = require('../middleware/authMiddleware')


router
.route('/')
.get(galleryController.getAllGallery)
.post(uploads,galleryController.createGallery)

router
.route('/:id')
.delete(galleryController.deleteGallery);

module.exports=router;