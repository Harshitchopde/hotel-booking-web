import express from "express" 
import { deleteUser, getAllUser, getOneUser, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";
const routes = express.Router();

// hear we define the router path
// UPDATE
routes.put("/:id",updateUser)
// DELETE
routes.delete("/:id",deleteUser)
// GET
routes.get("/:id",getOneUser)
// GET ALL
routes.get("/",getAllUser)
// routes.get("/test/verify",verifyToken,(req,res)=>{
//     res.json(req.user)
// })
routes.get("/checkUser/:id",verifyUser,(req,res)=>{
    console.log(req.params.id);
    
    res.send("YOU can delete this account")
})
export default routes