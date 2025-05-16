import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.router";
import authRouter from "./routes/auth.router";
import { PortType } from "./types/common.types";
import { errorResponse } from "./middlewares/errorHandler.midlleware";

dotenv.config();

const PORT: PortType = process.env.PORT || 3000;

const app : Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello World");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.use(
    errorResponse as (
        error: any,
        req: Request,
        res: Response,
        next: NextFunction
     ) => void
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});