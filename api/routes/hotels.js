import express from "express" 
import { addHotel, countByCity, countByType, deleteHotel, getAllHotel, getHotels, getOneHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const routes = express.Router();

// hear we define the router path

//CREATE
routes.post("/",verifyAdmin,addHotel)
// UPDATE
routes.put("/:id",verifyAdmin,updateHotel)
// DELETE
routes.delete("/:id",verifyAdmin,deleteHotel)
// // GET
// routes.get("/:id",getOneHotel)
// // GET ALL
// routes.get("/",getAllHotel)

// ---------------
// GET

routes.get("/",getHotels)
// GET ALL
routes.get("/findAll",getAllHotel)

routes.get("/countByCity",countByCity);
routes.get("/countByType",countByType);
routes.get("/:id",getOneHotel)
export default routes