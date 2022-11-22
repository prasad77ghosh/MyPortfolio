import express from "express";
import ErrorMiddleWare from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/AuthRoute.js";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

app.use("/myprofile/v1", authRouter);

app.use(ErrorMiddleWare);
export default app;
