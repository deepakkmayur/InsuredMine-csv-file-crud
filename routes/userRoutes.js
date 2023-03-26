const express=require('express')
const router=express.Router()

const {createUser,getUser,updateUser,deleteUser}=require('../controllers/userController')

router.post("/user",createUser)
router.get('/user/:id',getUser)  
router.put('/user/:id',updateUser)
router.delete('/user/:id',deleteUser)


module.exports=router