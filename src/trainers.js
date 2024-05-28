const mongoose = require("mongoose");

//creating a database
    
    
const trainer = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type:String,
        required: true
    },

    phone:{
        type : Number , 
        required : true
    },
    age:{
        type : Number , 
        required : true
    },
    experience:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    }
})

const trainers = new mongoose.model("trainers", trainer)

module.exports = trainers