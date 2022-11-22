import User from "../models/User.js";
import { ErrorHandler } from "../services/ErrorHandler.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

//login
export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("All fileds are required..", 400));
  }
  const user = await User.findOne({ email, password });
  if (!user) {
    return next(new ErrorHandler("Invalid user or password", 400));
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
  res
    .status(200)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged in successfully..",
    });
});

// logout
export const logout = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

// getUser
export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne().select("-password -email");
  res.status(200).json({
    success: true,
    user,
  });
});
