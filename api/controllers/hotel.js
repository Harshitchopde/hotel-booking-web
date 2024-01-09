import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";

//CREATE
export const addHotel =async (req,res,next)=>{
    const newHotel = new Hotel(req.body);
    // next(createError(500,"something went wrong"))
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(e){
        // res.status(500).send("not added"+e)
        next(createError(500,e.message))
    }
}

// // UPDATE
export const updateHotel =async (req,res,next)=>{
    // const newHotel = new Hotel(req.body);
    try{
        const savedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new:true
            }
        )
        res.status(200).send(savedHotel);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // DELETE
export const deleteHotel =async (req,res,next)=>{
    // const newHotel = new Hotel(req.body);
    try{
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).send(deleteHotel);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // GET
export const getOneHotel =async (req,res,next)=>{
    // const newHotel = new Hotel(req.body);
    try{
        const savedHotel =await Hotel.findById(req.params.id)
        res.status(200).send(savedHotel);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // GET ALL
export const getAllHotel =async (req,res,next)=>{
  
    try{
        const allHotel =await Hotel.find()
        res.status(200).send(allHotel);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}