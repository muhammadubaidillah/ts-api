import { NextFunction, Request, Response } from "express"
import prisma from "../prisma/client";
import { createUser, findUser } from "../services/user.service";
import { createResponse } from "../utils/response.utils";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await prisma.users.findMany({
            select: {
                username: true,
                email: true,
                created_at: true,
            },
        });
        res.status(200).send(createResponse(true, "Users fetched successfully", users));
    } catch (error) {
        next(error);
    }
};

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = await createUser(req.body);

        const { password, id, ...data } = newUser;

        res.status(200).send(createResponse(true, "Register Success", data));
    } catch (error) {
        next(error);
    }
}

export const getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await findUser({ email: req.query.q as string })

        res.status(200).send(createResponse(true, "User Found", user));
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await findUser({ id: req.query.q as string})
        
        res.status(200).send(createResponse(true, "User Found", user));
    } catch (error) {
        next(error);
    }
}