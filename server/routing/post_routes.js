import express from "express";
import { deletePost, getAllPosts, getPostById, makePost, updatePost } from "../controllers/post_controllers.js";
import { Authenticate } from "../middlewares/authenticate.js";
const PostRouter = express.Router();


PostRouter.get('/',Authenticate, getAllPosts);
PostRouter.post('/addPost',Authenticate,makePost);
PostRouter.get('/:id',getPostById);
PostRouter.put('/:id', updatePost)
PostRouter.delete('/:id',deletePost);

export default PostRouter;
