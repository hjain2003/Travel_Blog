import mongoose from "mongoose";
import Post from "../models/Post.js";
import User from "../models/User.js";

//get all posts
export const getAllPosts = async (req, res) => {
    let posts;

    try {
        posts = await Post.find();

    } catch (err) {
        console.log(err);
    }

    if (posts) {
        res.status(200).json({ posts });
    }
    else {
        res.status(500).json({ error: "unexpected error" });
    }
}

//makePost
export const makePost = async (req, res) => {
    const { title, description, image, location, date, user } = req.body;
    if (!title || !description || !image || !location || !date) {
        res.status(422).json({ error: "fields empty" });
    }

    //extracting user
    let existingUser;
    try{
        existingUser = await User.findById(user);
    }catch(err){    
        console.log(err);
    }
    if (!existingUser) {
        res.status(422).json({ message: "user not found" });
    }


    try {
        const post = new Post({ title, description, image, location, date, user });

        //create session to save post in both collections
        const session = await mongoose.startSession(); //starts a session
        session.startTransaction();

        existingUser.posts.push(post); //pushing to posts array in user schema
        await existingUser.save({session}); //saving user
        const postAdd = await post.save({session}); //saving post
        session.commitTransaction(); //finishing transaction
        if (postAdd) {
            res.status(201).json({ message: "post added successfully" });
        }
        else {
            res.status(422).json({ message: "post not added" });
        }
    } catch (err) {
        console.log(err);
    }


}

//get post by id
export const getPostById = async (req, res) => {
    const id = req.params.id; //get id from url

    let post;
    try {
        post = await Post.findById(id); //id we are getting from the url
        if (post) {
            res.status(201).json({ post });
        }
        else {
            res.status(422).json({ message: "post not found" });
        }

    } catch (error) {
        return console.log(error);
    }
};

//update post
export const updatePost = async(req,res)=>{
    const id = req.params.id;
    const { title, description, image, location, date} = req.body;
    if (!title || !description || !image || !location || !date) {
        res.status(422).json({ error: "fields empty" });
    }

    
    try {
        const post = await Post.findByIdAndUpdate(id, {
            title, description, image, location, date : new Date(`${date}`)
        });
        //no need to call save...save already called

        if (post) {
            res.status(201).json({ message : "post updated successfully" });
        }
        else {
            res.status(422).json({ message: "unable to update" });
        }

    } catch (err) {
        console.log(err);
    }
};

//delete post
export const deletePost =async(req,res)=>{
    const id =req.params.id;

    let post;
    try {

        const session = await mongoose.startSession();
        session.startTransaction();
        
        post = await Post.findById(id).populate("user");
        post.user.posts.pull(post);
        await post.user.save({session});
        post = await Post.findByIdAndRemove(id);
        session.commitTransaction();

        if (post) {
            res.status(201).json({ message : "post deleted successfully" });
        }
        else {
            res.status(422).json({ message: "unable to delete" });
        }

    } catch (error) {
        return console.log(error);
    }
}