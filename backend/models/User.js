import mongoose from "mongoose";
import validator from "validator";

const UserModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name can't exceed more than 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      validate: [
        validator.isStrongPassword,
        "Please enter a strong password it must contains atleast 8-char,1-symbol,1-number,1-uppercase",
      ],
      select: false,
    },

    about: {
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subTitle: String,
      description: {
        type: String,
        required: true,
      },
      quote: String,
      avatar: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
    achievements: [{ url: String, description: String }],
    // skills: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    // projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    // notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
  },
  { timestaps: true }
);

const User = mongoose.model("User", UserModel);
export default User;
