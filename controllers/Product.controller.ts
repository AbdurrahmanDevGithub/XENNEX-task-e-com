import { Request,Response } from "express";
import { addProduct, updateProductsById, viewAllProduct, viewProductsById } from "../services/Product.services";


//ADD PRODUCT
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

  //VIEW ALL PRODUCTS
  static async viewAllProducts(req:Request,res:Response){
    try{
      const products=await viewAllProduct()
      if("error" in products){
        return res.status(products.statuscode) .json(products.error)
      }

      return res.status(products.statuscode) .json({message:products.message,products})
    }catch(error){
      console.log(error,"error in view all products controller");
    }
  }


  //VIEW PRODUCTS BY ID
  static async viewProductById(req:Request,res:Response){
    try{
          const {id}=req.params
          const result=await viewProductsById(id)
          if("error" in result){
            return res.status(result.statuscode) .json(result.error)
          }
          return res.status(result.statuscode) .json(result)
        }catch(error){
          console.log(error,"error comes from viewProductById controller");
        }
  }

    //UPDATE PRODUCT BY ID
    static async updateProductById(req:Request, res:Response){
      try{
        const {id} = req.params
        const {name,price,stock,cat_name} = req.body
        const result= await updateProductsById(id,{name,price,stock,cat_name})
        if("error" in result){
          return res.status(result.statuscode) .json({error:result.error})
        }
        return res.status(result.statuscode) .json({updated:result.updated})
      }catch(error){
        console.log(error,"error comes from updateProductById controller");
      }
    }

}
