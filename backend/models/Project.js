import mongoose from "mongoose";

const ProjectModel = new mongoose.Schema(
  {
    gitUrl: {
      type: String,
      required: true,
    },
    deployedUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxLength: [5000, "Name can't exceed more than 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
      required: true,
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

    techStack: {
      type: String,
      required: true,
    },
  },
  { timestaps: true }
);

const Project = mongoose.model("Project", ProjectModel);
export default Project;
