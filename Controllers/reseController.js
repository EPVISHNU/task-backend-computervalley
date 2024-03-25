// const rese=require('../Models/userSchema')

const Form = require('../Models/RegdataSchema')


exports.addForm = async(req,res) => {
    console.log('inside addform');

    const userId = req.payload

    const file = req.file.filename

    const {name,username,email,gender,password,DOB,phone,address,place} = req.body

    console.log(name,username,email,gender,password,DOB,phone,address,place,file);


    try{
        const existForm = await Form.findOne({password})
        if(existForm){
            res.status(401).json('already exist')
        }
        else{
            const newform = new Form({

                name,username,email,gender,password,DOB,phone,address,place,file,userId

            })
            await newform.save()
            res.status(200).json(newform)
        }

        
    }
    catch(err){
        res.status(404).json({message:err.message})
    }

}