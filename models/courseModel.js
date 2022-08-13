const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    program:{
        type:String,
        required:[true,'A Program Must have Name']
    },
    type:{
        type:String,
        required:[true,'A Model Must have Name'],
    },
    image:{
        type:String
    },
    description:{
        type: String
    },
    duration :{
        type:Number,
        required:[true,'A Program Must have Duration']
    },
    fee:{
        type:Number,
        required:[true,'A Program Must have fee']
    },
    outcome:{
        type:String,
        required:[true,'A Program Must have OutCome']
    },
    // materials:{
    //     semster:{
    //         type:Number,
            // required:[true,'A Program Must have materials']
    //     },
    //     file:{
    //         type : String
    //     }
    // }

});
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;