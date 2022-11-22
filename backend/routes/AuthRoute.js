import express from "express";
import { login } from "../controllers/AuthController.js";
import { logout } from "../controllers/AuthController.js";
import { getUser } from "../controllers/AuthController.js";
import { isAuthenticated } from "../middlewares/authUser.js";

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.route("/logout").get(logout);
authRouter.route("/user").get(getUser);

export default authRouter;
