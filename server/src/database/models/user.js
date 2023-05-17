import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Insert username"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Choose a password"],
  },
  orderHistory: {
    type: Object,
    required: [true],
    default: [],
  },
  credits: {
    type: Number,
    required: [true],
    default: 0,
  },
});

const User = mongoose.model("user", userSchema);

export default User;
