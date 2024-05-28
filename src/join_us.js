const mongoose = require("mongoose");

//creating a database
    
    
const joinus = new mongoose.Schema({
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
    height:{
        type : Number , 
        required : true
    },
    currweight:{
        type : Number , 
        required : true
    },
    tarweight:{
        type : Number , 
        required : true
    }
    
})

const join_us = new mongoose.model("joinus", joinus)

module.exports = join_us