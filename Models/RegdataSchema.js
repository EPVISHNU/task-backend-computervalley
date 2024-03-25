const mongoose = require('mongoose')

const FormSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
       
    },
   

    password:{
        type:String,
        required:true,

    },
    DOB:{
        type:String,
        required:true,
       
    },
    phone:{
        type:String,
        required:true,


    },
    address:{
        type:String,
        required:true,


    },
    place:{
        type:String,
        required:true,


    },
    file:{
        type:String,
        required:true,


    },
    userId:{
        type:String,
        required:true,

    }

})

const Form = mongoose.model('Form',FormSchema)

module.exports = Form


