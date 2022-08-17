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
exports.getCourse = async (req,res)=>{
    try {
        console.log(req.params.id);
        const course = await Course.findById(req.params.id);  
        res.status(200).json({
            status:'success',
            data:{
                course
            }
        })
    } catch (err) {
        res.status(404).json({
            status:'fail',
            message:err
        })
    }
}

exports.createCourse = async (req, res)=> {
    try {
        console.log(req.body)
        const  newCourse = await new Course({
            program: req.body.program,
            type: req.body.type,
            description: req.body.description,
            duration: req.body.duration,
            outcome: req.body.outcome,
            fee: req.body.fee,
            image:req.files.image[0].path
        });
        console.log(newCourse);
        // if(req.files.image[0].fieldname=='image'){
        //     newCourse.image = req.files.image[0].path
        // }

        
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

exports.deleteCourse = async (req,res) => {
    try{ 
      await Course.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: "success",
        data: 'Deleted'
      });
    }catch(err){
      res.status(404).json({
        status: "fail",
        message: err
      });
    }
  };