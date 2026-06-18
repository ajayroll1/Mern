
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";



export const registerUser=async(req,res)=>{
  
  try{
    const {name,email,password}=req.body;

    if(!name || !email || !password){
      return res.status(400).json({
        success:false,
        message:"All three fields are reuired please fill all fields "
      });
    }
    const existingUser=await User.findOne({email});
    if (existingUser){
      return res.status(400).json({
        success:false,
        message:"Account already exists"
      });
    }



    const hashedPassword =await bcrypt.hash(password,10)  
    const user =await User.create({name,email,password:hashedPassword});
    res.status(201).json({
      success:true,
      message:"Your account is created Successfully",
      data:user
    })
    

  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
}


export const loginUser=async(req,res)=>{
  try{
    const {email,password}=req.body;
    if (!email || !password ) {
      return res.status(400).json({
        success:false,
        message:"please enter the login details -> email and password"
      });
    }

    const user=await User.findOne({email});
    if (!user){
      return res.status(404).json({
        success:false,
        message:"user not found "
      });
    }



    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch){
      return res.status(400).json({
        success:false,
        message:"your password is not matched please enter correct password"

      });

      
    }
    const  token = jwt.sign(
      {id:user._id},
      process.env.JWT_SECRET,
      {
        expiresIn:"7d" 
      }
    );
    return res.status(200).json({
        success:true,
        message:"Login Successfull",
        token,
        user:{
          id:user._id,
          name:user.name,
          email:user.email
        }

        
      });


    
    // agar user registered hia to usko login karne dedo 


  }
  catch(error){

    return res.status(500).json({
      success:false,
      message:error.message
      })

    // agar use registered nhi hai then bolna hia user registered nhi hai 


  }
}


export const logoutUser=async(req,res)=>{

  
  try{
    /// agar user logged in hia to usko logout karaow 
    return res.status(200).json({
      success:true,
      message:"logout Successfully"
    });

  }catch(error){
    return res.status(500).json({
      success:false,
      message:"server error"
    });

    // yeha eeror dikhai internal kcuh ho tah ia to 

  }
}