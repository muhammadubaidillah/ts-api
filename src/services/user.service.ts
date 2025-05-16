import prisma from "../prisma/client";
import { ICreateUser, UserIdentifierType } from "../types/user.types";
import hashPassword from "../utils";

export const createUser = async (user: ICreateUser) => {
    const hashedPassword = await hashPassword(user.password);

    return await prisma.users.create({
        data: {
            ...user,
            password: hashedPassword,
        },
    });
};

export const findUser = async (identifier: UserIdentifierType) => {
    if ("id" in identifier) {
        return await prisma.users.findUnique({
            select: {
                username: true,
                email: true,
                created_at: true,
            },
            where: {
                id: identifier.id,
            },
        });
    } else if ("email" in identifier) {
        return await prisma.users.findUnique({
            select: {
                username: true,
                email: true,
                created_at: true,
            },
            where: {
                email: identifier.email},
        });
    } else {
        throw new Error("Invalid identifier type");
    }
};