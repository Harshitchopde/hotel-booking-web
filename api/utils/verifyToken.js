import  Jwt  from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req,res,next)=>{
    try {
        const token = req.cookies.access_token;
        // console.log(req.cookies);
        
        if(!token) return next(createError(401,"You didn't have token !"))
        Jwt.verify(token,process.env.Jwt,(err,user)=>{
        if(err) return next(createError(403,"Invailed token !"))
        req.user = user;
    console.log(user);
    
       next()

        })
    } catch (error) {
      return  next(createError(500,error.message))
    }
}
export const verifyUser = (req,res,next)=>{
    try {
        verifyToken(req,res,()=>{
            console.log(req.user.isAdmin);
            
            if(req.user.id===req.params.id || (req.user.isAdmin)){
                next()
            }else return  next(createError(400,"You are not authoise"))
        })
    } catch (error) {
        return next(createError(error.status,error.message))
    }
}
export const verifyAdmin = (req,res,next)=>{
    try {
        verifyToken(req,res,()=>{
            console.log(req.user.isAdmin);
            
            if((req.user.isAdmin)){
                next()
            }else return  next(createError(400,"You are not authoise"))
        })
    } catch (error) {
        return next(createError(error.status,error.message))
    }
}