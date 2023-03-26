const asyncHandler=require('express-async-handler')


const Policy=require('../models/PolicyModel')
const User=require('../models/UserModel')



const createPolicy=asyncHandler(async (req,res)=>{
   const {policy_number,policy_type,policy_mode,policy_start_date,policy_end_date}=req.body 

   const userData=await User.findById({_id:req.params.id})
   if(userData._id){
      if(policy_number&&policy_type&&policy_mode&&policy_start_date&&policy_end_date){
         let policyData
         
         const policyExist=await Policy.find({user_id:userData._id})
         if(policyExist.length!=0){
            res.status(400)
            throw new Error("policy already exist")
         }else{
            policyData=await Policy.create({
          user_id:userData._id,
          policy_number:policy_number,
          policy_type:policy_type,
          policy_mode:policy_mode,
          policy_start_date:policy_start_date,
          policy_end_date:policy_end_date
       })
       res.status(201).json({
        message:"new policy created",
        policy:policyData,
       })
       }
    }else{
      res.status(400)
      throw new Error("enter the credentilas properly")
    }
    }else{
    res.status(400)
    throw new Error("no user exist")
    }
 })



 const getPolicyData=asyncHandler(async(req,res)=>{
   const userData=await User.findById({_id:req.params.id})
   if(userData._id){
     const policyData=await Policy.findOne({user_id:userData._id})
     if(policyData){
        res.status(200).json(policyData)  
     }else{
      res.status(400)
      throw new Error("policy details not found, you have to create it once again")
     }

    }else{
      res.status(400)
      throw new Error("no user found")   
    }
 })


 
 const updatePolicy=asyncHandler(async(req,res)=>{
  
   
   const userData=await User.findOne({_id:req.params.id})
   if(userData._id){
           const policyData=await Policy.findOne({user_id:userData._id})
              
           if(policyData._id){  
              const updatedPolicy=await Policy.updateOne({user_id:req.params.id},req.body)   
                 res.status(201).json({message:"policy updated"})      
           }else{  
            res.status(400)
            throw new Error("no policy found")
           }
   }else{
      res.status(400)         
      throw new Error("no policy exist")    
   }     
   
    })



    const deletePolicy=asyncHandler(async(req,res)=>{
      const userData=await User.findOne({_id:req.params.id})
        if(userData._id){

         const policyData=await Policy.findOne({user_id:userData._id})
         if(policyData){
            await Policy.findOne({user_id:userData._id}).deleteOne()  
            res.status(200).json({message: `${userData.firstname}'s policy details deleted`})
         }else{
            res.status(400)
            throw new Error("account not found")
           }
         }else{
           res.status(400)
            throw new Error("no user found")  
         }
     
      })


 module.exports={createPolicy,getPolicyData,updatePolicy,deletePolicy}