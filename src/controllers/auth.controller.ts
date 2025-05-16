import { NextFunction, Request, Response } from "express";
import { loginUser } from "../services/auth.services";
import { createResponse } from "../utils/response.utils";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userToken = await loginUser(req.body);
        const { password, id, ...safeUser } = userToken;
        
        res.status(200).send(createResponse(true, "Login successful", safeUser))
    } catch (error) {
        next(error);
    }
}