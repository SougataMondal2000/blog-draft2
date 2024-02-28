import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  desc: String,
  content: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
});

export default mongoose.model("posts", postSchema);
