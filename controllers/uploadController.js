
const csv=require("csvtojson")

const Agent=require('../models/AgentModel')
const Carrier=require('../models/CarrierModel')
const LOB=require('../models/LOBModel')
const Policy=require('../models/PolicyModel')
const Account=require('../models/UserAccountModel')
const User=require('../models/UserModel')   



const uploadController= async(req,res)=>{

   try {
      //csv to json conversion
         let csvData=await csv().fromFile(req.file.path);
      
      if(csvData.length!=0){
         csvData.forEach(async(item,index)=>{

            const userData=await User.create({
               firstname:item.firstname
               ,gender:item.gender,
               phone:item.phone,
               email:item.email,
               address:item.address,
               zip:item.zip,
               state:item.state,
               dob:item.dob
            })

            let user_id=userData._id
          
            const agentData=await Agent.create({
               user_id:userData._id,
               agent:item.agent,
               agency_id:item.agency_id
            })
            const carrierData=await Carrier.create({
               user_id:userData._id,
               company_name:item.company_name
            })
            
            const lobData=await LOB.create({
               user_id:userData._id,
               category_name:item.category_name,
             premium_amount:item.premium_amount
            })

            const policyData=await Policy.create({
               user_id:userData._id,
               policy_number:item.policy_number,
               policy_type:item.policy_type,
               policy_mode:item.policy_mode,
               policy_start_date:item.policy_start_date,
               policy_end_date:item.policy_end_date

            })
 

            const accountData=await Account.create({
               user_id:userData._id,
               account_name:item.account_name,
               account_type:item.account_type 
            })
          })
        
          
            res.status(201).json("data iserted successful")  
     
      }else{
         res.status(400)
         throw new Error("file not uploaded")
      }
   } catch (error) {
      console.log(error);
      res.status(400).json(error)
   }
}

module.exports=uploadController



