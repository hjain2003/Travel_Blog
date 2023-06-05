import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcryptjs";

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

//hashing 
// userSchema.pre('save',async function(next){
//     // console.log("hi");
//     if(this.isModified('password')){
//         this.password = await bcrypt.hashSync(this.password, 12);  //hashSync
//         this.cpassword = await bcrypt.hashSync(this.cpassword, 12);
//     }
//     next();
// });

export default model("User", userSchema);
//users