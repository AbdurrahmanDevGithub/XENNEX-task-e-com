import mongoose, {Schema, Document, Model} from "mongoose"
import bcrypt from "bcrypt"

export interface IUser extends Document{
  username:string,
  email:string,
  password:string
}

export interface IUserModel extends Model<IUser> {
  isEmailTaken(email:string):Promise<boolean>;
}

const userSchema=new Schema<IUser,IUserModel>({
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

userSchema.statics.isEmailTaken = async function(email:string){
  const user = await this.findOne({email});
  return !!user
}


userSchema.pre("save",async function(){
  const user=this as IUser;
  if(user.isModified("password")){
    const salt = await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(user.password,salt)
    user.password=hash
  }
})


const UserModel=mongoose.model<IUser,IUserModel>("user",userSchema)




export default UserModel