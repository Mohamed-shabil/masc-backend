const express = require('express')
const bodyParser=require('body-parser')
const courseRoute = require('./router/courseRoute');
const multer = require('multer');
const path=require('path')
const ejs =('ejs')

const app = express()
var storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        cb(null,Date.now() + ext)
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
        fileSize: 1024 * 1024 *2 
    }
})

app.use(express.static('view'))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('./uploads',express.static('uploads'))
app.set('view engine', 'ejs')
app.use((req,res,next)=>{
    req.requstTime = new Date().toISOString();
    next();
})



app.use('/api/v1/course',courseRoute);

module.exports = app;