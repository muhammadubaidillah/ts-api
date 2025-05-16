import { Router, Request, Response } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";


const route: Router = Router();

route.post("/login", loginUser);
route.post("/register", registerUser)

export default route;
