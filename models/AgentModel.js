const mongoose=require('mongoose')

const AgentSchema=mongoose.Schema({

  user_id:{
    type:mongoose.Schema.Types.ObjectId
},
  agent:{
      type:String
    },
    agency_id:{
      type:String
    }
},{timestamps:true})


const AgentModel=mongoose.model("Agent",AgentSchema)

module.exports=AgentModel
