// const mongoose=require('mongoose')

// const UserSchema=mongoose.Schema({
//    firstname:{
//       type:String
//    },
// userType:{
//    type:String
// },
// gender:{
//    type:String
// },
// phone:{
//    type:String
// },
// email:{
// type:String
// },
// address:{
//    type:String
// },
// zip:{
//    type:String
// },
// state:{
//    type:String
// },
// dob:{
//    type:Date
// }

// },{timestamps:true})


// const UserModel=mongoose.model("User",UserSchema)

// module.exports=UserModel






const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
   index:{
      type:Number
    },

    
   firstname:{
      type:String
   },
userType:{
   type:String
},
gender:{
   type:String
},
phone:{
   type:String
},
email:{
type:String
},
address:{
   type:String
},
zip:{
   type:String,
  
},
state:{
   type:String
},
dob:{
   type:String
},
agent:{
   type:String
 },
 agency_id:{
   type:String
 },
 company_name:{
   type:String
},
category_name:{
   type:String
},
premium_amount:{
   type:Number
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
account_name:{
   type:String
 },
 account_type:{
   type:String
 }


},{timestamps:true})


const UserModel=mongoose.model("User",UserSchema)

module.exports=UserModel

