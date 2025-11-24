import mongoose, {Schema} from "mongoose"


export interface ICategory{
  name:string,
  description:string
}

const categorySchema= new Schema<ICategory> ({
  name:String,
  description:String
})

