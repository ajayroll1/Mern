import express from "express";
import {registerUser,loginUser, logoutUser}from "../controller/auth.controller.js"

import { getProfile } from "../controller/get.profile.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";





const router = express.Router() // yaha ekk instance bana liye route ka 
router.post("/register", registerUser);
router.post("/login",loginUser);
router.get("/profile",isAuthenticated,getProfile);
router.post("/logout",logoutUser)



export default router;