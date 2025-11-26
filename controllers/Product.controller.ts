import { Request,Response } from "express";
import { addProduct } from "../services/Product.services";

export class productController{
  static async addProduct(req:Request, res:Response){
    try{
      const {name,price,stock,cat_name} = req.body
      const addedProduct=await addProduct({name,price,stock,cat_name})
      if("error" in addedProduct){
        return res.status(addedProduct.statuscode) .json(addedProduct.error)
      }
      return res.status(addedProduct.statuscode) .json({message:addedProduct.message,category_id:addedProduct.category_id,product:addedProduct.product})
    }catch(error){
      console.log(error,"error comes from addProduct controller");
      
    }
  }
}