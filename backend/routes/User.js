import express from "express";
import { addUser, getUser, signup } from "../controller/User.js";
import { checkRole } from "../middleware/CheckRoles.js";
import authenticateToken from "../middleware/ExtractToken.js";


const userRoute=express.Router();


// userRoute.post("/user",[ authenticateToken, checkRole("ADMIN")],addUser);
userRoute.get("/user",[authenticateToken, checkRole("USER")],getUser);
userRoute.get("/admin",[ authenticateToken, checkRole("ADMIN")],addUser);

// userRoute.post("/signup",signup);

export default userRoute;