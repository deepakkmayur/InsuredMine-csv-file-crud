const express=require('express')
const router=express.Router()
const {createAccount,getAccountData,updateAccount,deleteAccount}=require("../controllers/accountController")

router.post("/account/:id",createAccount)
router.get('/account/:id',getAccountData)  
router.put('/account/:id',updateAccount)
router.delete('/account/:id',deleteAccount)


module.exports=router