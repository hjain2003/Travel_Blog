import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

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
        type: mongoose.Types.ObjectId, 
        ref: "Post"
    }],
    tokens : [
        {
            token:{
                type:String,
                required :true
            }
        }
    ]
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

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : token});
        await this.save();
        // console.log(token);
        return token;
    }catch(err){
        console.log(err);
    }
}



export default model("User", userSchema);
//users