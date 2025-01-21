import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
  },
  expiry: {
    type: Date,
  },
});
