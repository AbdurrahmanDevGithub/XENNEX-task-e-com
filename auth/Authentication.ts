import jwt from "jsonwebtoken"
import { IUser } from "../dbModels/User.model"
import { NextFunction, Request, Response } from "express"
import dotenv from "dotenv"
dotenv.config()


interface AuthRequest extends Request{
  user?:any
}


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


export const verifyToken=(req:AuthRequest,res:Response,next:NextFunction)=>{
  try{
    const authHeader=req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token) return res.status(404) .json('token not found');

    jwt.verify(token,process.env.JWT_SECRET!,(err,user)=>{
      if(err) return res.status(401) .json('invalid token');
      req.user=user;
      next()
    })
  
    }catch(error){
    console.log(error,"error comes from verify token");
  }
}