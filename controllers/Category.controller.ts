import { log } from "console";
import { Request,Response } from "express";
import { addCategoryServices,deleteCategoryById,updateCategoryById,viewAllCategory,viewCatageoryById } from "../services/Category.services";

export class CategoryController{

  //ADD AN CATEGORY
  static async addCategory(req:Request,res: Response){
    try{
      const {name,description} = req.body
      const category=await addCategoryServices({name,description})
      if("error" in category){
        return res.status(category.statuscode) .json({error:category.error}) 
      }
      return res.status(category.statuscode) .json({message:category.message,statuscode:category.statuscode,category:category})
    }catch(error){
      console.log(error,"error comes from addCategory controller");
    }
  }

  //VEW ALL CATEGORIES
  static async viewAllCategories(req: Request, res: Response){
    try{
      const categories=await viewAllCategory();
      if("error" in categories){
        return res.status(categories.statuscode) .json(categories.error)
      }
      return res.status(categories.statuscode) .json(categories)
    }catch(error){
      console.log(error,"error comes from viewAllCategories controller");
    }
  }

  //VIEW CATEGORY BY ID
  static async viewCatageoryById(req: Request, res: Response){
    try{
      const {id}=req.params
      const result=await viewCatageoryById(id)
      if("error" in result){
        return res.status(result.statuscode) .json(result.error)
      }
      return res.status(result.statuscode) .json(result)
    }catch(error){
      console.log(error,"error comes from viewCatageoryById controller");
    }
  }


  //UPDATE CATEGORY BY ID
  static async updateCategoryById(req:Request, res:Response){
    try{
      const {id} = req.params
      const {name,description} = req.body
      const result= await updateCategoryById(id,{name,description})
      if("error" in result){
        return res.status(result.statuscode) .json({error:result.error})
      }
      return res.status(result.statuscode) .json({updated:result.updated})
    }catch(error){
      console.log(error,"error comes from viewCatageoryById controller");
    }
  }


  ////DELETE BY ID
static async deleteCategoryById(req:Request, res:Response){
  try{
    const {id} = req.params
    const result=await deleteCategoryById(id);
    if("error" in result){
      return res.status(result.statuscode) .json({error:result.error})
    }
    return res.status(result.statuscode) .json({message:result.message,deletedDeteils:result.delteCategory})
  }catch(error){
    console.log(error,"Error in deleteById controller");
  }
}


}

