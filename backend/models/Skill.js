import mongoose from "mongoose";

const SkillModel = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please Enter Your Name"],
      maxLength: [30, "Name can't exceed more than 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    Status: {
      type: String,
      required: [true, "Please Enter Your Status"],
      default: "Familiar",
    },
    Image: {
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
  { timestaps: true }
);

const Skill = mongoose.model("Skill", SkillModel);
export default Skill;
