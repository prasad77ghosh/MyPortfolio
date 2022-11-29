import express from "express";
import { login } from "../controllers/AuthController.js";
import { logout } from "../controllers/AuthController.js";
import { getUser } from "../controllers/AuthController.js";
import { myProfile } from "../controllers/AuthController.js";
import { isAuthenticated } from "../middlewares/authUser.js";
import { contact } from "../controllers/AuthController.js";
import { updateUser } from "../controllers/AuthController.js";

const authRouter = express.Router();

authRouter.route("/login").post(login);
authRouter.route("/logout").get(logout);
authRouter.route("/user").get(getUser);
authRouter.route("/conatct_me").post(contact);
authRouter.route("/me").get(isAuthenticated, myProfile);
authRouter.route("/admin/update").put(isAuthenticated, updateUser);

export default authRouter;
