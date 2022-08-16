const Material = require('../models/materialModel')
const app = require('../app')

exports.getMaterial = async(req ,res)=>{
    try {
        const material = await Material.find({program:req.body.program,sem: req.body.sem})

        res.status(200).json({
            status: 'success',
            results:material.length,
            data:{
                material
            }
        })    
    } catch (err) {
        res.status(404).json({
            status:'fail',
            message:err,
        })
    }
}

exports.createMaterial = async (req, res)=> {
    try {
        const  newMaterial = new Material({
            subjects:{
                program:req.body.program,
                semester:req.body.semester,
                subject:{
                    name:req.body.name,
                    material: req.files.material[0].path
                }
            }
        })
       
        
        newMaterial.save();
        res.status(201).json({
            status: 'success',
            data:{
                material:newMaterial
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message:err
        });
    }
};

exports.deleteMaterial = async (req,res) => {
    try{ 
      await Material.findByIdAndDelete(req.params.id);
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