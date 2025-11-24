import express from "express"
import connectDb from "./database/DbConnection"
import dotenv from "dotenv"
dotenv.config()


const app=express()


//Database connection
connectDb()




app.listen(process.env.PORT,()=>{
  console.log(`Server runs on port ${process.env.PORT}`);
  
})
  