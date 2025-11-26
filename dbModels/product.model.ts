import mongoose, {Schema, Document} from "mongoose"


interface IProducts extends Document{
  name:string,
  price:number
  stock:number
  categoryId?:mongoose.Types.ObjectId | string
}

const productSchema=new Schema<IProducts>({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
  },
  stock:{
    type:Number,
    required:true
  },
  categoryId:{
    type:mongoose.Types.ObjectId,
    ref:"category"
  }
})


const productModel=mongoose.model("products",productSchema)



export default productModel