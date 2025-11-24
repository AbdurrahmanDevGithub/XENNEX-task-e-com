import mongoose, {Schema, Document} from "mongoose"

export interface IUser extends Document{
  username:string,
  email:string,
  password:string
}


const userSchema=new Schema<IUser>({
  username:{
    required:true,
    type:String
  },
  email:{
    required:true,
    type:String,
    unique:true
  },
  password:{
    required:true,
    type:String
  }
})

const UserModel=mongoose.model<IUser>("user",userSchema)

export default UserModel