const express=require('express')
const router=express.Router()

const {createPolicy,getPolicyData,updatePolicy,deletePolicy} =require("../controllers/policyController")


router.post("/policy/:id",createPolicy)
router.get('/policy/:id',getPolicyData)  
router.put('/policy/:id',updatePolicy)
router.delete('/policy/:id',deletePolicy)


module.exports=router