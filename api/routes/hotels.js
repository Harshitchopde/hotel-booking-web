import express from "express" 
import { addHotel, deleteHotel, getAllHotel, getOneHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const routes = express.Router();

// hear we define the router path

//CREATE
routes.post("/",verifyAdmin,addHotel)
// UPDATE
routes.put("/:id",verifyAdmin,updateHotel)
// DELETE
routes.delete("/:id",verifyAdmin,deleteHotel)
// GET
routes.get("/:id",getOneHotel)
// GET ALL
routes.get("/",getAllHotel)
export default routes