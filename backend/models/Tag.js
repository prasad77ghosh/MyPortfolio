import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

const Tag = mongoose.model("Tag", TagSchema);
export default Tag;
