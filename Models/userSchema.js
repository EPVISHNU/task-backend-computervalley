const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },

    username:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    }, 
    // dob:{
    //     type:String,
    //     required:true
    // },
    // phone:{
    //     type:String,
    //     required:true
    // },
    // address:{
    //     type:String,
    //     required:true
    // },
    // place:{
    //     type:String,
    //     required:true
    // },
    password:{
        type:String,
        required:true
    },
    // image:{
    //     type:String,
    //     required:true
    // },
    
})

const users=mongoose.model('users',userSchema)

module.exports=users