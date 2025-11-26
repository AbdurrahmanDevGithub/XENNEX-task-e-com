import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const connectDb=async()=>{
  try{
    await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME!}:${process.env.DB_PASSWORD!}@cluster0.2bqfrai.mongodb.net/?appName=Cluster0`)
    
    //await mongoose.connect(`mongodb://localhost:27017/EXENNEX`)
    
    console.log("Database connected successfully");
  }catch(error){
    console.log("Db not connected");
    
  }
}

export default connectDb