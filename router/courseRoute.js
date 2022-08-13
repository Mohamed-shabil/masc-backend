const express = require('express');
const courseController = require('../controller/courseController')
const router = express.Router(); 
const multer = require('multer');
const path= require('path');

var storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){

        let ext = path.extname(file.originalname)
        cb(null,Date.now()+ext)
    }
})
var uploads = multer({
    storage:storage,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype=='image/png'|| file.mimetype=='image/jpg'
        ){
            callback(null,true)
        }else{
            console.log('only jpeg and png')
            callback(null,false)
        }
    },
    limits:{
        fileSize: 1024 * 1024 * 2
    }
})


router
.route('/')
.get(courseController.getAllCourse)
.post(uploads.single('image'),courseController.createCourse)


module.exports=router;