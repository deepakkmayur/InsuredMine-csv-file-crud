const mongoose=require('mongoose')

const CarrierSchema=mongoose.Schema({
   user_id:{
      type:mongoose.Schema.Types.ObjectId
    },
   company_name:{
      type:String
   }

},{timestamps:true})


const CarrierModel=mongoose.model("Carrier",CarrierSchema)

module.exports=CarrierModel
