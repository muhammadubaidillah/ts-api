import { NextFunction, Request, Response } from "express";
import { login } from "../services/auth.services";
import { createResponse } from "../utils/response.utils";
import { createUser } from "../services/user.service";

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userToken = await login(req.body);
        const { password, id, ...safeUser } = userToken;

        res.status(200).send(createResponse(true, "Login successful", safeUser))
    } catch (error) {
        next(error);
    }
}

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = await createUser(req.body);

        const { password, id, ...data } = newUser;

        res.status(200).send(createResponse(true, "Register Success", data));
    } catch (error) {
        next(error);
    }
}