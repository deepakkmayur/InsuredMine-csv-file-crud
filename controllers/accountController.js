const asyncHandler=require('express-async-handler')



const Account=require('../models/UserAccountModel')
const User=require('../models/UserModel')


const createAccount=asyncHandler(async (req,res)=>{
   const {account_name,account_type}=req.body 
    
   const userData=await User.findById({_id:req.params.id})
   if(userData._id){
      
      if(account_name&&account_type){             
         let accountData
         
         const accountExist=await Account.find({user_id:userData._id})
         if(accountExist.length!=0){
            res.status(400)
            throw new Error("account already exist")
         }else{
          accountData=await Account.create({
          user_id:userData._id,
          account_name:account_name,
          account_type:account_type
       })
       res.status(201).json({
        message:"new account created",
        account:accountData,
       })
       }
    }else{
      res.status(400)
      throw new Error("invalid credentials")
    }
    }else{
    res.status(400)
    throw new Error("no user exist")
    }
 })


 const getAccountData=asyncHandler(async(req,res)=>{
   const userData=await User.findById({_id:req.params.id})
   if(userData._id){
      const accountData=await Account.findOne({user_id:userData._id})
     if(accountData){
        res.status(200).json(accountData)  
     }else{
      res.status(400)
      throw new Error(" account details not found, you have to create it once again")
     }
    }else{
      res.status(400)
      throw new Error("no user found")  
    }
 })

 const updateAccount=asyncHandler(async(req,res)=>{

      const userData=await User.findOne({_id:req.params.id})
      if(userData._id){
              const accountData=await Account.findOne({user_id:userData._id})
                 
              if(accountData._id){
                 const updatedAccount=await Account.updateOne({user_id:req.params.id},req.body)   
                    res.status(201).json({message:"account updated"})      
              }else{  
               res.status(400)
               throw new Error("no account found")
              }
      }else{
         res.status(400)
         throw new Error("no user exist")    
      }    
    })



    const deleteAccount=asyncHandler(async(req,res)=>{
      const userData=await User.findOne({_id:req.params.id})
        if(userData._id){
           const accountData=await Account.findOne({user_id:userData._id})
           if(accountData){
              await Account.findOne({user_id:userData._id}).deleteOne()  
              res.status(200).json({message: `${userData.firstname}'s account details deleted`})
           }else{
            res.status(400)
            throw new Error("account not found")
           }
         }else{
           res.status(400)
            throw new Error("no user found")
         }
     
      })



 module.exports={createAccount,getAccountData,updateAccount,deleteAccount}