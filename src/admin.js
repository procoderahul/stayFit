const mongoose = require("mongoose");


const admin = new mongoose.Schema({
    admin:{
        type : String,
        required: true
    },

    password:{
        type : String,
        required:true
    }
})

const admincoll = new mongoose.model("admincoll", admin)

module.exports = admincoll;