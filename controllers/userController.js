const asyncHandler=require('express-async-handler')


const User=require('../models/UserModel')




const createUser=asyncHandler(async (req,res)=>{
   const {firstname,phone,email,gender,address,zip,state,dob}=req.body 
    
   let userData

    if(firstname&&phone&&email){
     userData=await User.create({
       firstname:firstname,
       phone:phone,
       email:email,
       gender:gender||"",
       address:address||"",
       zip:zip||0,
       state:state||"", 
       dob:dob||""
    })
    res.status(201).json({
     message:"new user created",
     user:userData,
    })
    }else{
    res.status(400)
    throw new Error("invalid credentials")
    }
 })




 const getUser=asyncHandler(async(req,res)=>{
   const userData=await User.findById({_id:req.params.id})
   if(userData._id){
      res.status(200).json(userData)
    }else{
      res.status(400)
      throw new Error("no user found")
    }
 })



 const updateUser=asyncHandler(async(req,res)=>{
   const userData=await User.findOne({_id:req.params.id})
   if(userData._id){
           const updatedUser=await User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
           res.status(201).json({message:"user updated",updatedUser})
   }else{
      res.status(400)
      throw new Error("no user exist")    
   }    

 })


 const deleteUser=asyncHandler(async(req,res)=>{
 const userData=await User.findOne({_id:req.params.id})
   if(userData._id){
        await User.findById({_id:req.params.id}).deleteOne()  
        res.status(200).json({message: `${userData.firstname}'s user details deleted `})
    }else{
      res.status(400)
       throw new Error("no user found")
    }
 })


 module.exports={createUser,getUser,updateUser,deleteUser}