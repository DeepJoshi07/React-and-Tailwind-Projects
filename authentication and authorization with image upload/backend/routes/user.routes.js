import express, { Router } from "express"
import { getUserData, login, logout, signup } from "../controllers/user.controllers.js";
import {upload} from '../middleware/multer.js';
import {auth} from '../middleware/checkAuth.js'


const userRouter = express(Router());

userRouter.post("/signup",upload.single("profileImage"),signup);
userRouter.post("/login",login);
userRouter.post("/logout",logout);
userRouter.get("/getuserdata",auth,getUserData)

export default userRouter;