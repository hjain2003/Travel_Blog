import express from "express";
import { deletePost, getAllPosts, getMyPosts, getPostById, makePost, updatePost } from "../controllers/post_controllers.js";
import { Authenticate } from "../middlewares/authenticate.js";
const PostRouter = express.Router();


PostRouter.get('/',Authenticate, getAllPosts);
PostRouter.post('/addPost',Authenticate,makePost);
PostRouter.get('/myposts', getMyPosts);
PostRouter.get('/:id',getPostById);
PostRouter.put('/:id', updatePost)
PostRouter.delete('/:id',deletePost);

export default PostRouter;
