import mongoose from "mongoose";
import { messageSchema } from "./message.model";

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.type.ObjectId,
    ref: "User",
    required: true,
  },
  chathistory: {
    tyepe: [messageSchema],
    default: [],
  },
});
export const History = mongoose.model("History", historySchema);
