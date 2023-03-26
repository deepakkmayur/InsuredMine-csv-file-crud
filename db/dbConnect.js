
const mongoose=require('mongoose')

const dbConnect=()=>{
   mongoose.connect(process.env.MONGO_CONNECT).then(()=>console.log("db connected"))
   .catch((err)=>console.log("db connection error"))
}

module.exports=dbConnect