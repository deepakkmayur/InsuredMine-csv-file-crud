const mongoose=require('mongoose')

const policySchema=mongoose.Schema({
   user_id:{
      type:mongoose.Schema.Types.ObjectId
    },
   policy_number:{
      type:String
   },
   policy_type:{
      type:String
   },
   policy_mode:{
      type:String
   },
   policy_start_date:{
      type:String
   },
   policy_end_date:{
      type:String
   }


},{timestamps:true})


const PolicyModel=mongoose.model("Policy",policySchema)

module.exports=PolicyModel
