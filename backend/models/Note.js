import mongoose from "mongoose";

const NoteModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    titleImg: {
      public_id: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
    body: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestaps: true }
);

const Note = mongoose.model("Note", NoteModel);
export default Note;
