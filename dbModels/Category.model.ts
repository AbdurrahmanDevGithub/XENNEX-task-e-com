import mongoose, {Schema, Document} from "mongoose"


export interface ICategory extends Document{
  name:string,
  description:string
}

const categorySchema= new Schema<ICategory> ({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String
  }
})


const CategoryModel=mongoose.model("category",categorySchema)

export default CategoryModel
