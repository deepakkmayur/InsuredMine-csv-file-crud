const mongoose=require('mongoose')

const LOBSchema=mongoose.Schema({
   user_id:{
      type:mongoose.Schema.Types.ObjectId
    },
   category_name:{
      type:String
   },
   premium_amount:{
      type:Number
   }

},{timestamps:true})


const LOBModel=mongoose.model("LOB",LOBSchema)

module.exports=LOBModel
