import express from "express";
import { getAllUsers, homeit, login, logout, signup } from "../controllers/user_controllers.js";
import { Authenticate } from "../middlewares/authenticate.js";
// import { Router } from "express";

const userRouter =express.Router();

userRouter.get('/',getAllUsers);
userRouter.get('/homeCall',Authenticate,homeit);
userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.get('/logout',logout);

export default userRouter;