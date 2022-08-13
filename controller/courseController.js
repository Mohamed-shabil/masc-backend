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
}

exports.createCourse = async (req, res)=> {
    try {
        const newCourse = new Course({
            program: req.body.program,
            type: req.body.type,
            description: req.body.description,
            duration: req.body.duration,
            outcome: req.body.outcome,
            fee: req.body.fee
        });
        if(req.file){
            newCourse.image = req.file.path
        }
        newCourse.save();
        res.status(201).json({
            status: 'success',
            data:{
                course: newCourse
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message:err
        });
    }
};