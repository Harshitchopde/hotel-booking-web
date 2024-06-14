import express from "express" 
import { addRoom, deleteRoom, getAllRoom, getOneRoom, updateRoom, updateTheAvaiblility } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const routes = express.Router();

// hear we define the router path

//CREATE
routes.post("/:hotelId",verifyAdmin,addRoom)
// UPDATE
routes.put("/:id",verifyAdmin,updateRoom)
// DELETE
routes.delete("/:id",verifyAdmin,deleteRoom)
routes.put("/availablility/:id",updateTheAvaiblility)
// GET ALL
routes.get("/",getAllRoom)

routes.get("/:id",getOneRoom)
export default routes