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

  //VIEW PRODUCTS BY ID
export const viewProductsById=async(id:string)=>{
  try{
    if(!id){
      return {error:"Id not found",statuscode:409}
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return { error: "Invalid ID format", statuscode: 400 };
    }

    const product =await ProductModel.findById(id)
    if(!product){
      return ({error:"no products found on this id",statuscode:404})
    }

    return {product,statuscode:200};
  }catch(error){
    console.log(error,"error comes from viewProductsById services");
    return {error,statuscode:500}
  }

}

//UPDATE PRODUCTS BY ID
export const updateProductsById=async(id:string,{name,price,stock,cat_name}:IProducts)=>{
  try{
     if(!id){
      return {error:"Category Id needed",statuscode:409};
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return { error: "Invalid ID format", statuscode: 400 };
    }
    const cat_id=await CategoryModel.findOne({name:cat_name})
    if(!cat_id){
      return {error:"invalid category name",statuscode:404}
    }

    const updated=await ProductModel.findByIdAndUpdate(
      id,
      {name,price,stock,categoryId:cat_id},
      {new:true}
    )
    if(!updated){
      return {error:"not updated, error in ProductModel.findByIdAndUpdate",statuscode:404}
    }

    return {updated,statuscode:200}
  }catch(error){
    console.log(error,"error comes from updateProductsById services");
    return {error:"error comes from updateProductsById services",statuscode:500}
  }
}




//DELETE BY ID
export const deleteProductsById=async(id:string)=>{
  try{
    if(!id){
      return {error:"id not found",statuscode:409}
    }
    if(!mongoose.Types.ObjectId.isValid(id)){
      return { error: "Invalid ID format", statuscode: 400 };
    }
    const delteProduct=await ProductModel.findByIdAndDelete(id)
    if(!delteProduct){
      return {error:"no product found in this id",statuscode:404}
    }
    return {message:"Deleted successfully",delteProduct,statuscode:200}
  }catch(error){
    console.log(error,"error comes from deleteProductsById services");
    return {error:"error comes from deleteProductsById services",statuscode:500}
  }
}



//SERACH PRODUCTS BY NAME
export const serchProductsByName=async(name:string)=>{
  try{
    if(!name){
      return {error:"you should send the name",statuscode:409}
    }
    const product=await ProductModel.findOne({name})
    if(!product){
      return {error:"product not found",statuscode:404}
    }
    return {product,statuscode:200}
  }catch(error){
    console.log(error,"error in serchProductsByName services");
    return {error:"error in serchProductsByName services",statuscode:500}
  }
}


//FILTER PRODUCTS BY CATEGORY
export const filterProductsByCategory=async(name:string)=>{
  try{
    if(!name){
      return {error:"Category name not found",statuscode:409}
    }
    const products=await CategoryModel.find({name})
    if(!products){
      return {error:"products not found in this category",statuscode:404}
    }
    return {products,statuscode:200}
  }catch(error){
    console.log(error,"error in filterProductsByCategory services");
    return {error:"error in filterProductsByCategory services",statuscode:500}
  }
}