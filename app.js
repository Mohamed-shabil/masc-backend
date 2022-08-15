const express = require('express')
const courseRoute = require('./router/courseRoute');
const notificationRoute = require('./router/notificationRoute');
const galleryRoute = require('./router/galleryRoute');
const multer = require('multer');
const path=require('path')
const ejs =('ejs')
const app = express()


app.use(express.static('view'))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.set('view engine', 'ejs')

app.use((req,res,next)=>{
    req.requstTime = new Date().toISOString();
    next();
})


app.use('/api/v1/course',courseRoute);
app.use('/api/v1/gallery',galleryRoute);
app.use('/api/v1/notification',notificationRoute);

module.exports = app;