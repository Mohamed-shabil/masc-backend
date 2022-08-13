const express = require('express');
const courseController = require('../controller/courseController')
const router = express.Router(); 
const multer = require('multer');

const filestorageEngine = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../public')
    },
    filename:(req, file,cb)=>{
        cb(null,Date.now()+'--'+file.originalname);
    }
})
const upload = multer({storage:filestorageEngine});

router
.route('/')
.get(upload.single('image'),courseController.getAllCourse)
.post(courseController.createCourse)

module.exports=router;