// import { hashSync } from "bcryptjs";
import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import pkg from 'bcryptjs';
const { hashSync } = pkg;

//getallusers
export const getAllUsers = async (req, res) => {

    let users;
    try {
        users = await User.find(); //get all results
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        res.status(500).json({ error: 'unexpected error' });
    }
    else {
        res.status(200).json({ users });
    }
};

//registration
export const signup = async (req, res) => {

    // console.log(req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(422).json({ error: "empty fields !" });
    }

    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ error: "Email already exists !" });
        }

        //hashing
        const hashedPassword = pkg.hashSync(password);

        const user = new User({ name, email, password : hashedPassword});
        const userRegister = await user.save();

        if (userRegister) {
            res.status(201).json({ message: "user registered successfully !" });
        }
        else {
            res.status(422).json({ error: "Registration failed" });
        }
    } catch (err) {
        console.log(err);
    }
}

//login
export const login = async(req, res)=>{
    try{
        const {email, password}=req.body;

        if(!email || !password){
            res.status(400).json({message:"fields empty!"});
        }

        const userLogin=await User.findOne({email:email}) //has entire document

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if(isMatch){
                console.log(userLogin);
                
                // const token = await userLogin.generateAuthToken();
                // console.log(token);
                // res.cookie("jwtoken",token,{
                //     expires : new Date(Date.now()+25892000000),
                //     httpOnly:true
                // });
                // res.cookie("test",'val');
                res.status(201).json({message: "user successfully logged in!"});
            }
            else{
                res.status(400).json({message:"pwd incorrect!"});
            }
        }
        else{
            return res.status(400).json({message : "user does not exist !"});
        }

    }catch(err){
        console.log(err);
    }
}

