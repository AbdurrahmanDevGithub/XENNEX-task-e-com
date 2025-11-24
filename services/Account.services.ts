import UserModel from "../models/User.model";

interface signupData{
  username:string,
  email:string,
  password:string
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
    
    return {user,statuscode:200}

  }catch(error: any){
    console.log(error)
    return { error: "Error in account signup services", statuscode:500 };
  }
}