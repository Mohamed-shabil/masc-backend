const app = require('./../app');
const Gallery = require('./../models/galleryModel');

exports.getAllGallery = async (req,res)=>{
    try {
        const gallery = await Gallery.find();
        res.status(200).json({
            status:'success',
            results:Gallery.length,
            data:{
                gallery   
            }
        })
    } catch (err) {
        res.status(404).json({
            status:'error',
            message: err
        })
    }    
}

exports.createGallery=async(req,res) =>{
    try {
        console.log(req.files.gallery[0].path)
        const newGallery = await new Gallery({
            gallery:req.files.gallery[0].path
        });
        res.status(200).json({
            status:'success',
            data:{
                newGallery
            }
        })
    } catch (err) {
        res.status(400).json({
            status:'failed',
            message: err
        })
    }
}

// exports.deleteNotification=async (req,res)=>{

//     try {
//         console.log(req.params.id)
//         await Notification.findByIdAndDelete(req.params.id);
//         res.status(200).json({
//             status:'success',
//             data:null
//         })
//     } catch (err) {
//         res.status(404).json({
//             status: "fail",
//             message: err
//           });
//     }
// }