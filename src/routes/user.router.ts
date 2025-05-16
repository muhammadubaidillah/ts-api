import { Router, Request, Response } from "express";
import { getUserByEmail, getUserById, getUsers, registerUser } from "../controllers/user.controller";

const route: Router = Router();

route.get("/", getUsers);
route.get("/id", getUserById);
route.get("/email", getUserByEmail);

route.post("/", registerUser);

export default route;