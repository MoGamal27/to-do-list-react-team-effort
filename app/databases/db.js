import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/to-do");
    console.log("Database connection established");
  } catch (error) {
    console.log("Database connection error ", error);
  }
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passowrd: {
    type: String,
    required: true,
  },
});

const listSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
const List = mongoose.model("List", listSchema);

export { connectDB, User, List };
