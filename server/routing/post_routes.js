import express from "express";
import { deletePost, getAllPosts, getPostById, makePost, updatePost } from "../controllers/post_controllers.js";
const PostRouter = express.Router();

PostRouter.get('/',getAllPosts);
PostRouter.post('/addPost',makePost);
PostRouter.get('/:id',getPostById);
PostRouter.put('/:id', updatePost)
PostRouter.delete('/:id',deletePost);

export default PostRouter;
