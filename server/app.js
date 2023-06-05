import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import connectDB from "./db/conn.js";
import userRouter from "./routing/user_routes.js";

const app=express();
dotenv.config({path:'./config.env'});


//db
connectDB();
//userSchema

//middlewares
app.use(express.json());
app.use("/user", userRouter);

app.get('/',(req,res)=>{
    res.send(`Hello world app`);
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server up and running  at ${PORT}`);
});