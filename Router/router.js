const express=require('express')

const router=new express.Router()
const userController=require('../Controllers/userController')
const jwtMidlleware = require('../Middlewares/jwtMiddleware')
const resController = require('../Controllers/reseController')

const multerConfig = require('../Middlewares/multerMiddleware')

router.post('/register',userController.register)

router.post('/login',userController.login)

router.post('/form/regdata',jwtMidlleware,multerConfig.single('file'),resController.addForm)



router.post('/home/reset-password',jwtMidlleware,userController.resetPass)

module.exports=router