const mongoose = require("mongoose");

//creating a database

mongoose.connect("mongodb://127.0.0.1/stayfit")
    .then(() => {
        console.log("db connected")
    })
    .catch((error) => {
        console.log(error)
    })
    
    
const login = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    }
})

const collection = new mongoose.model("coll1", login)

module.exports = collection

