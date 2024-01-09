import express from "express" 
import { login, register } from "../controllers/auth.js";
const routes = express.Router();

// hear we define the router path
routes.post("/register",register)
routes.post("/login",login)
// routes.get("/verify",getVerify)
export default routes