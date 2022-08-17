const express = require('express')
const courseRoute = require('./router/courseRoute');
const notificationRoute = require('./router/notificationRoute');
const galleryRoute = require('./router/galleryRoute');
const materialRoute= require('./router/MaterialRoute');
const multer = require('multer');
const path=require('path')
const ejs =('ejs')
const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/uploads',express.static('uploads'))

app.use('/api/v1/course',courseRoute);
app.use('/api/v1/gallery',galleryRoute);
app.use('/api/v1/notification',notificationRoute);
app.use('/api/v1/material',materialRoute);

module.exports = app;