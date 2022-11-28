import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { ErrorHandler } from "../services/ErrorHandler.js";
import asyncHandler from "express-async-handler";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(
      new ErrorHandler("Only Owner Can Acceess This Resource..", 400)
    );
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded._id);
  req.user = user;
  next();
});
