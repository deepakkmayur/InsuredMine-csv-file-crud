const mongoose=require('mongoose')

const AccountSchema=mongoose.Schema({
  user_id:{ 
    type:mongoose.Schema.Types.ObjectId
  },
  account_name:{
   type:String
 },
 account_type:{      
   type:String
 }

},{timestamps:true})


const AccountModel=mongoose.model("Account",AccountSchema)

module.exports=AccountModel
