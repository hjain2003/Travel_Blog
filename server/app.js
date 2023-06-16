import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import {connectDB} from "./db/conn.js";
import userRouter from "./routing/user_routes.js";
import PostRouter from "./routing/post_routes.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app=express();
dotenv.config({path:'./config.env'});


//db
connectDB();
//userSchema

//middlewares
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/post", PostRouter);

app.get('/',(req,res)=>{
    res.send(`Hello world app`);
});

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server up and running  at ${PORT}`);
});