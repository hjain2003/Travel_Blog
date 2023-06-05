import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique : true
    },
    password:{
        type:String,
        required: true
    },
    posts : [{
        type: String
    }],
});

export default model("User", userSchema);
//users