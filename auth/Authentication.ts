import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { IUser } from "../models/User.model"
dotenv.config()

export const generateToken=(user:IUser)=>{
  try{
    const email=user.email
    const password=user.password

    const payload={email,password}

    const token=jwt.sign(payload,process.env.JWT_SECRET!)
    return token
  }catch(error){
    console.log("error in genarateToken", error );
    throw new Error ("error in genarateToken")
  }
}