import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  comment: String,
  post: { type: mongoose.Schema.Types.ObjectId, ref: "posts" },
});

export default mongoose.model("comments", commentSchema);
