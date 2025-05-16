import { Router, Request, Response } from "express";
import { loginController } from "../controllers/auth.controller";

const route: Router = Router();

route.post("/login", loginController);

export default route;
