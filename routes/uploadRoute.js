
const express=require('express')
const multer=require('multer')
const uploadController=require('../controllers/uploadController')

const router=express.Router()



const storage=multer.diskStorage({
   destination:(req,file,cb)=>{
      cb(null,"./uploads")
   },
   filename:(req,file,cb)=>{
      cb(null,file.originalname)
   }
})

const upload=multer({
storage,
})


router.post('/',upload.single('csvFile'),uploadController)





module.exports=router    


