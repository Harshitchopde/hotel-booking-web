import express from "express" 
import { addRoom, deleteRoom, getAllRoom, getOneRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const routes = express.Router();

// hear we define the router path

//CREATE
routes.post("/:hotelId",verifyAdmin,addRoom)
// UPDATE
routes.put("/:id",verifyAdmin,updateRoom)
// DELETE
routes.delete("/:id",verifyAdmin,deleteRoom)

// GET ALL
routes.get("/",getAllRoom)

routes.get("/:id",getOneRoom)
export default routes