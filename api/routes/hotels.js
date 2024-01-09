import express from "express" 
import { addHotel, deleteHotel, getAllHotel, getOneHotel, updateHotel } from "../controllers/hotel.js";
const routes = express.Router();

// hear we define the router path

//CREATE
routes.post("/",addHotel)
// UPDATE
routes.put("/:id",updateHotel)
// DELETE
routes.delete("/:id",deleteHotel)
// GET
routes.get("/:id",getOneHotel)
// GET ALL
routes.get("/",getAllHotel)
export default routes