import User from "../models/User.js";
import mongoose from "mongoose";

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

        const user = new User({ name, email, password});
        //bcrypt
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

