const mongoose = require("mongoose");

const usercontact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },


    surname: {
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

    message:{
        type : String , 
        required : true
    }
})

const user_contact = new mongoose.model("usercontact", usercontact)

module.exports = user_contact

