import {Request, Response} from "express"

import { accountSignup } from "../services/Account.services";


export class accountController{
  static async signup(req:Request, res:Response){
    try {
        const { username, email, password } = req.body;
        const user = await accountSignup({username, email, password })
        if("error" in user){
          return res.status(user.statuscode) .json({error:user.error})
        }

        return res.status(user.statuscode) .json(user)
    } catch (error) {
        console.log("Error in register controller:", error);
        return res.status(500).json("Error in register controller:");
    }
  }
}