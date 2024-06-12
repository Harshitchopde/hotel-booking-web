import User from "../models/User.js"
import { createError } from "../utils/error.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register = async(req,res,next)=>{

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({...req.body,password:hash})
        console.log(newUser)
        await newUser.save();
        res.status(200).json(newUser)
    } catch (error) {
        next(error)
    }
   

}
export const login = async (req,res,next)=>{
  
  try {
    const user = await User.findOne({username:req.body.username});
    if(!user) return next(createError(400,"User not found!"))
    const {password,isAdmin,...otherDetail} = user._doc;
    const isCorrect = bcrypt.compareSync(req.body.password, password); // true
    if(!isCorrect) return next(createError(400,"Wrong password or username"));
    // res.status(200).json({...otherDetail})
    // create token
    const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)

    res.cookie("access_token",token,{
        httpOnly:true
    }).status(200).json({...otherDetail})


  } catch (error) {
    console.log(error+"my eror")
    next(error)
  }

}
// export const getVerify = async(req,res,next)=>{
//   try {
//     // const token  = req.cookie.access_token;
//     const token = req.body.token;
//     const decode = jwt.verify(token,process.env.JWT);
//     console.log(decode);

    
//   } catch (error) {
//     console.log(error);
    
//   }
// }