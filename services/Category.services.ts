import CategoryModel from "../dbModels/Category.model"
import mongoose from "mongoose"


interface ICategory{
name:string,
description:string
}


//ADD PRODUCT TO CATEGORIES
export const addCategoryServices=async({name,description}: ICategory)=>{
  if(!name){
    return {error:"you should enter name of the category",statuscode:404}
  }
  
  if(await CategoryModel.findOne({name})){
    return {error:"this category already added",statuscode:409}
  }
  const category=new CategoryModel({
    name,
    description
  })
  await category.save()

  return {message:"Category added successfully",statuscode:200,category}
}



//VIEW ALL CATEGORIES
export const viewAllCategory=async()=>{
  try{
    const categories=await CategoryModel.find({})
    if(categories.length===0){
      return {error:"No categories found",statuscode:404}
    }
    return {categories,statuscode:200}
  }catch(error){
    console.log(error,"error comes from viewAllCategory services");
    return {error,statuscode:500}
  }
}


//VIEW CATEGORY BY ID
export const viewCatageoryById=async(id:string)=>{
  try{
    if(!id){
      return {error:"Id not found",statuscode:409}
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return { error: "Invalid ID format", statuscode: 400 };
    }

    const result =await CategoryModel.findById(id)
    if(!result){
      return ({error:"no categories found on this id",statuscode:404})
    }

    return {result,statuscode:200};
  }catch(error){
    console.log(error,"error comes from viewCatageoryById services");
    return {error,statuscode:500}
  }
}


//UPDATE CATEGORY BY ID
export const updateCategoryById=async(id:string,{name,description}: ICategory)=>{
  try{
    if(!id){
      return {error:"Category Id needed",statuscode:409};
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return { error: "Invalid ID format", statuscode: 400 };
    }
    const updated=await CategoryModel.findByIdAndUpdate(
      id,{name,description},
      {new: true}
    );

    if(!updated){
      return {error:"not updated",statuscode:404}
    }

    return {updated,statuscode:200}

  }catch(error){
    console.log(error,"error comes from updateCategoryById services");
    return {error:"error comes from updateCategoryById services",statuscode:500}
  }
}


//DELETE BY ID
export const deleteCategoryById=async(id:string)=>{
  try{
    if(!id){
      return {error:"id not found",statuscode:409}
    }
    if(!mongoose.Types.ObjectId.isValid(id)){
      return { error: "Invalid ID format", statuscode: 400 };
    }
    const delteCategory=await CategoryModel.findByIdAndDelete(id)
    if(!delteCategory){
      return {error:"no category found in this id",statuscode:404}
    }
    return {message:"Deleted successfully",delteCategory,statuscode:200}
  }catch(error){
    console.log(error,"error comes from deleteCategoryById services");
    return {error:"error comes from deleteCategoryById services",statuscode:500}
  }
}



