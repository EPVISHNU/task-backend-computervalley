const users=require('../Models/userSchema')

const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    const {name,username,gender,email,password}=req.body
    console.log(name,username,gender,email,password);

    try{
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(400).json('User already exists')
        }
        else{
            const newUser=new users({
                name,username,gender,email,password
            })
            await newUser.save()
            res.status(200).json('User created successfully...')
            
        }
    }
    catch(err){
        res.status(500).json('Server error'+err.message)
    }
   
}

exports.login=async(req,res)=>{
    const {email,password}=req.body

    try{
        const user=await users.findOne({email,password})
        if(user){
            const token=jwt.sign({userId:user._id},"superkey2024")
            console.log(token);
            res.status(200).json({user,token})
        }
        else{
            
            res.status(401).json('Invalid user')
        }
    }
    catch(err){
        res.status(500).json('Server error'+err.message)
    }
   
}

exports.resetPass =async (req, res) => {
    try {
        const { userId, newPassword } = req.body;

        
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, 'superkey2024')

        
        const user = await users.findById(decodedToken.userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        
        user.password = newPassword;
        await user.save()

        
        return res.status(200).json({ message: 'Password changed successful' })
    } 
    catch (error) {
      console.error('error :', error);
      return res.status(500).json({ error: 'error' })
    }
};