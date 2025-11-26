import express from "express"
import connectDb from "./config/DbConnection"
import dotenv from "dotenv"
dotenv.config()

import router from "./routes/index.route"

const app=express()

app.use(express.json())



connectDb()


app.use("/api",router)




app.listen(process.env.PORT,()=>{
  console.log(`Server runs on port ${process.env.PORT}`);
  
})
  