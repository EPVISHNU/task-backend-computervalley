const jwt = require('jsonwebtoken')

const jwtMidlleware = (req,res,next)=>{
    console.log("inside jwt middleware - router level middleware");

    const token = req.headers['authorization']?.slice(7)
    console.log(token);

    try{

        const tokenVerification = jwt.verify(token,'superkey2024')
        console.log(tokenVerification);

        req.payload = tokenVerification.userId

        next()
    }
    catch(err){
        res.status(401).json("Authorisation failed.....pls login again")
    }
}

module.exports = jwtMidlleware