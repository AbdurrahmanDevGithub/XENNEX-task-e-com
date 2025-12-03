import UserModel, { IUser } from "../dbModels/User.model";
import { generateToken } from "../auth/Authentication";

interface signupData{
  username:string,
  email:string,
  password:string
}

interface loginData{
  email:string,
  password:string
}

interface LoginSuccess{
  message:string,
  user:IUser,
  statuscode:number,
  token:string
}

interface LoginError{
  error:string,
  statuscode:number
}


export const accountSignup=async({username,email,password}: signupData)=>{
  try{
    if(await UserModel.isEmailTaken(email)){
      console.log("This email already registerd");
      return {error:"This email already taken",statuscode:409}
    }

    const user=new UserModel({
      username,
      email,
      password
    })
    await user.save();
    
    return {user,statuscode:200,message:"Account created successfully"}

  }catch(error: any){
    console.log(error)
    return { error: "Error in account signup services", statuscode:500 };
  }
}



export const accountLogin=async({email,password}: loginData): Promise <LoginSuccess | LoginError> => {
  try{
  const mailCheck=await UserModel.findOne({email})
  if(!mailCheck){
    return {error:"Invalid email",statuscode:404}
  }

  const verifyPassword=await mailCheck.comparePassword(password)
  if(!verifyPassword){
    return{error:"incorrect passwod",statuscode:404}
  }

  const token=await generateToken(mailCheck)

  return {message:"Login success",user:mailCheck,statuscode:200,token}

  }catch(error){
    console.log(error, "Error in account signup services");

    return { error: "Error in account signup services", statuscode:500 }; 
  }
}