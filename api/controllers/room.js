import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js"
import { createError } from "../utils/error.js";

//CREATE
export const addRoom =async (req,res,next)=>{
    const hotelId = req.params.hotelId;
    console.log(hotelId)
    const newRoom = new Room(req.body);
    try{
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelId,{
            $push:{rooms:savedRoom._id}
        });
        res.status(200).json(savedRoom);
    }
    catch(e){
        // res.status(500).send("not added"+e)
        next(createError(500,e.message))
    }
}

// // UPDATE
export const updateRoom =async (req,res,next)=>{
    // const newRoom = new Room(req.body);
    try{
        const savedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new:true
            }
        )
        res.status(200).send(savedRoom);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // DELETE
export const deleteRoom =async (req,res,next)=>{
    // const newRoom = new Room(req.body);
    try{
        const deleteRoom = await Room.findByIdAndDelete(req.params.id)
        res.status(200).send(deleteRoom);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // GET
export const getOneRoom =async (req,res,next)=>{
    // const newRoom = new Room(req.body);
    // console.log("+")
    try{
        const savedRoom =await Room.findById(req.params.id)
        res.status(200).json(savedRoom);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
// // GET ALL
export const getAllRoom =async (req,res,next)=>{
 
    try{
      
        console.log("All Rooms")
        const allRoom =await Room.find()

        res.status(200).send(allRoom);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
