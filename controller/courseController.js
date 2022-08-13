const Course = require('../models/courseModel')
const app = require('../app')

exports.getAllCourse = async(req ,res)=>{
    try {
        const course = await Course.find();
        res.status(200).json({
            status: 'success',
            results:course.length,
            data:{
                course
            }
        })

    
    } catch (err) {
        res.status(404).json({
            status:'fail',
            message:err,
        })
    }
};
exports.createCourse = async (req, res)=> {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json({
            status: 'success',
            data:{
                course: newCourse
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message:err,
        });
    }
};