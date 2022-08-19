const express = require('express');
const courseController = require('../controller/courseController')
const router = express.Router(); 
const uploads= require('../middleware/upload')
const {protect} = require('../middleware/authMiddleware')


router
.route('/')
.get(courseController.getAllCourse)
.post(uploads,courseController.createCourse)

router
.route('/:id')
.get(courseController.getCourse)
.delete(courseController.deleteCourse)


module.exports=router;