const express=require('express')
const dotenv=require('dotenv').config()

const dbConnect=require('./db/dbConnect')
const errorHandler=require('./middleware/errorMiddleware')

const uploadRoute=require('./routes/uploadRoute')
const userRoute=require("./routes/userRoutes")
const accountRoute=require('./routes/accountRoute')
const policyRoute =require("./routes/policyRoute")

const app=express()
const port=process.env.PORT
dbConnect()



//middleware for parsing of incoming request bodies
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/uploadFile',uploadRoute)
app.use('/',userRoute)
app.use('/',policyRoute)
app.use('/',accountRoute)



//error middleware
app.use(errorHandler)

//listening the port
app.listen(port,()=>console.log(`server running on ${port}`))
