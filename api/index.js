import express from "express";
// const dotenv = require("dotenv")
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRouter from "./routes/auths.js"
import hotelRouter from "./routes/hotels.js"
import userRouter from "./routes/users.js"
import roomRouter from "./routes/rooms.js"
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config()// without it will not work | to load the enviroment varible


const connect = async()=>{
    try{
     
            await mongoose.connect(process.env.MONGO);
          console.log("Mongo db connected")

    }
    catch(e){
        console.log("fail to connect"+e)
        new Error(e);
    }
}
const app = express();
app.use(cors())
app.use(cookieParser())
app.use(express.json())// to use json in respond
app.use("/api/auth",authRouter)
app.use("/api/hotel",hotelRouter)
app.use("/api/user",userRouter)
app.use("/api/room",roomRouter)
app.get("/user",(req,res)=>{
    res.send("hello guys")
})
// any think that you want to do with next
// middleware
app.use((err,req,res,next)=>{
    
    const status = err.status || 500 // 500 server error
    const message = err.message || "Something went wrong"

    return res.status(status).json({
        success: false,
        status,
        message,
        
    })
})

// mongoose.connection.on("diconnected",()=>{
//     console.log("disconnected")
// })
// mongoose.connection.on("connected",()=>{
//     console.log("connected")
// })
app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Everything working fine"
    })
})


app.listen(5500,()=>{
    connect();
    console.log("connneted to backend")
})