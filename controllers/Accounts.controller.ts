import {Request, Response} from "express"

import { accountSignup,accountLogin } from "../services/Account.services";


export class accountController{
  static async signup(req:Request, res:Response){
    try {
        const { username, email, password } = req.body;
        const user = await accountSignup({username, email, password })
        if("error" in user){
          return res.status(user.statuscode) .json({error:user.error})
        }

        return res.status(user.statuscode) .json({message:user.message,user})
    } catch (error) {
        console.log("Error in signup controller:", error);
        return res.status(500).json("Error in signup controller:");
    }
  }

  static async login(req: Request,res: Response){
    try{
      const {email,password} = req.body;
      const user=await accountLogin({email,password})
      if("error" in user){
        return res.status(user.statuscode) .json({error:user.error})
      }

      return res.status(user.statuscode) .json({message:user.message,user:user.user,token:user.token})

    }catch(error){
      console.log("Error in login controller:", error);
      return res.status(500).json("Error in login controller:");
    }
  }

}