import mongoose from "mongoose"
import CategoryModel from "../dbModels/Category.model"
import ProductModel from "../dbModels/product.model"


interface IProducts{
  name:string,
  price:number
  stock:number
  categoryId?:mongoose.Types.ObjectId | string
  cat_name?:string
}


//ADD PRODUCT
export const addProduct=async({name,price,stock,cat_name}:IProducts)=>{
  try{
    if(!name || !price || !stock || !cat_name){
      return {error:"All firelds are required",statuscode:409}
    }
    if(price<=0){
      return {error:"Price should be greater than 0",statuscode:400}
    }
    if(stock<=0){
      return {error:"Stock should be greater than 0",statuscode:400}
    }

    const category = await CategoryModel.findOne({name:cat_name})
    if(!category){
      return {error:"no category in this name",statuscode:404}
    }
    const id=category._id

    const product=new ProductModel({
      name,
      price,
      stock,
      categoryId:id
    })
    await product.save()

    return ({category_id:id,product,message:"Successfully stored",statuscode:200})
  }catch(error){
    console.log(error,"error in addProduct services");
    return ({error,statuscode:500})
  }
}


//VIEW ALL PRODUCT
export const viewAllProduct=async()=>{
  try{
    const products=await ProductModel.find({})
    if(products.length===0){
      return {error:"no products found",statuscode:404}
    }
    return {message:"success",products,statuscode:200}
  }catch(error){
    console.log(error,"error in view all products services");
    return {error:"error in view all products services",statuscode:500}
  }
}
