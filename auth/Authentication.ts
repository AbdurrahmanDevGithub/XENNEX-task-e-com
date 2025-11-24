import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const generateToken=async(user)=>{
  try{
    const email=user.email
    const password=user.password

    const payload={email,password}

    const token=jwt.sign(payload,process.env.JWT_SECRET!)
  }catch{
    console.log("error in genarateToken", error );
    return {error: "error in genarateToken"}
  }
}