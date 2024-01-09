import User from "../models/User.js"
import { createError } from "../utils/error.js";


// // UPDATE
export const updateUser =async (req,res,next)=>{
    // const newUser = new User(req.body);
    try{
        const savedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new:true
            }
        )
        res.status(200).send(savedUser);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // DELETE
export const deleteUser =async (req,res,next)=>{
    // const newUser = new User(req.body);
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(deleteUser);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // GET
export const getOneUser =async (req,res,next)=>{
    // const newUser = new User(req.body);
    try{
        const savedUser =await User.findById(req.params.id)
        res.status(200).send(savedUser);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // GET ALL
export const getAllUser =async (req,res,next)=>{
  
    try{
        const allUser =await User.find()
        res.status(200).send(allUser);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}