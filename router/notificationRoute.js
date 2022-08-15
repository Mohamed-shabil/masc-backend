const express = require('express');
const notificationController = require('./../controller/notificationController')
const router = express.Router(); 
const uploads= require('../middleware/upload')


router
.route('/')
.get(notificationController.getAllnotification)
.post(notificationController.createNotification)

router
.route('/:id')
.delete(notificationController.deleteNotification);




module.exports=router;