import mongoose, {Schema, Document} from "mongoose"


export interface ICategory extends Document{
  name:string,
  description:string
}

const categorySchema= new Schema<ICategory> ({
  name:String,
  description:String
})


const CategoryModel=mongoose.model("category",categorySchema)

export default CategoryModel
