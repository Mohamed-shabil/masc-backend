const express = require('express')
const bodyParser=require('body-parser')
const courseRoute = require('./router/courseRoute');
const multer = require('multer');
const app = express()



app.use(express.json());

app.use((req,res,next)=>{
    req.requstTime = new Date().toISOString();
    next();
})


app.use('/api/v1/course',courseRoute);

module.exports = app;