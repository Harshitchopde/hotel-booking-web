import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js";
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
// GET Hotel room
export const getHotelRooms = async(req,res,next)=>{
    const hotelId = req.params.hotelId;
    try {
        const hotel = await Hotel.findById(hotelId);
        const list = await Promise.all(
            hotel.rooms.map((room)=>{
                return Room.findById(room);
            })
        )
        res.status(200).json(list)
        
    } catch (error) {
        
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
    // console.log("+")
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
      
        console.log("All Hotels")
        const allHotel =await Hotel.find()

        res.status(200).send(allHotel);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}
export const getHotels =async (req,res,next)=>{
    const {limit,mini,maxi,city ,...other} = req.query;
    console.log("Query: ",req.query,mini)

    try{
        const allHotel =await Hotel.find({...other,city:{$regex:city || "",$options:"i"},cheapestRoom:{$gte:mini || 0,$lte:maxi || 9999}}).limit(limit)
        res.status(200).json(allHotel);
    }
    catch(e){
        res.status(500).json("not added"+e)
    }
}
export const countByCity =async (req,res,next)=>{
    // get the query cities
    const cities = req.query.cities.split(",");
    console.log("cities",cities)
    
    try{
        const list =  await Promise.all(cities.map(city =>{
            // return Hotel.find({city:city}).length // lengthy
            return Hotel.countDocuments({city:city})
        }))
        const allCity = [];
        for(let i = 0;i<cities.length;i++){
            let temp = {city:cities[i],number:list[i]};
            allCity.push(temp);
        }
       res.status(200).json(allCity);
    }
    catch(e){
        res.status(500).json("not added"+e)
    }
}
export const countByType =async (req,res,next)=>{
//   console.log("tid");
    const hotelCount = await Hotel.countDocuments({type:"hotel"})
    const apartmentCount = await Hotel.countDocuments({type:"apartment"})
    const resortCount = await Hotel.countDocuments({type:"resort"})
    const villaCount = await Hotel.countDocuments({type:"villa"})
    const cabinsCount = await Hotel.countDocuments({type:"cabin"})
  
    try{
        const allHotel =await Hotel.find()
        res.status(200).json([
            {type:"hotel",count:hotelCount},
            {type:"apartment",count:apartmentCount},
            {type:"resort",count:resortCount},
            {type:"villa",count:villaCount},
            {type:"cabin",count:cabinsCount}
        ]);
    }
    catch(e){
        res.status(500).send("not added"+e)
    }
}