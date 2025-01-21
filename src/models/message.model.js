import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["user", "ai"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  userId: {
    type: mongoose.schema.types.ObjectId,
    ref: "User",
    required: true,
  },
});
export const user = mongoose.model("message", messageSchema);
