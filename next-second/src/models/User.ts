import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
