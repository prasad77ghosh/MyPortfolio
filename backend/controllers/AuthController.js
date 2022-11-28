import User from "../models/User.js";
import { ErrorHandler } from "../services/ErrorHandler.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { sendMail } from "../services/SendEmail.js";

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

// get Profile
export const myProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new ErrorHandler("User Does't exist", 404));
  }
  res.status(400).json({
    success: true,
    user,
  });
});

// conatct to admin
export const contact = asyncHandler(async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(new ErrorHandler("All fields must be provided.", 400));
  }

  try {
    const emailMessage = `Hey, I am ${name}. My email is ${email}\n My message is :- ${message}.`;
    await sendMail(emailMessage);
    res.status(200).json({
      success: true,
      message: "Email sent successfully..",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
