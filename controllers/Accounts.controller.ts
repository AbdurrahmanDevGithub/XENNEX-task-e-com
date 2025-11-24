import {Request, Response} from "express"

class accountController{
  static async signup(req:Request, res:Response){
    try {
        const { email, password, username } = req.body;
        const user = await companyServices.companyRegiter(email, password, username);
        if(user.error){
          return res.status(user.statuscode).json({error:user.error})
        }

        return res.status(201).json({ user });
    } catch (error) {
        console.log("Error in register controller:", error);
        return res.status(500).json({ message: 'Error in register controller', error: error.message });
    }
  }
}