import AppError from "../errors/AppError";
import prisma from "../prisma/client";
import { IEmailPassword, IUsernamePassword, UserTokenType } from "../types/user.types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey: string = process.env.JWT_SECRET || "secret";


export const loginUser: {
    (payload: IEmailPassword): Promise<UserTokenType>;
    (payload: IUsernamePassword): Promise<UserTokenType>;
} = async (
    payload: IEmailPassword | IUsernamePassword
): Promise<UserTokenType> => {
    let user;

    if ("email" in payload) {
        user = await prisma.users.findUnique({ where: { email: payload.email } });
    } else if("username" in payload) {
        user = await prisma.users.findUnique({ where: { username: payload.username } });
    }

    if (!user) {
        throw new AppError("Invalid credential account, user not found", 404);
    }

    const isMatch = await bcrypt.compare(payload.password, user.password);
    if (!isMatch) {
        throw new AppError("Invalid credential account, wrong password", 401);
    }

    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
        expiresIn: "1h",
    });

    return { ...user, token };
}