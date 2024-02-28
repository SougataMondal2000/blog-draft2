import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PostModel from "./models/Post.js";
import CommentModel from "./models/Comment.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/blog", {})
  .then(console.log("connected to mongodb!!!"))
  .catch((err) => console.log(err, "DB Error!"));

// for post
app.post("/add", (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const content = req.body.comment;
  const comment = req.body.comment;
  PostModel.create({
    title: title,
    desc: desc,
    content: content,
    comment: comment,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't post data!"));
});

app.get("/get", (req, res) => {
  PostModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't fetch data!"));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  PostModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't delete data!"));
});

// for comment
app.post("/addcomment", (req, res) => {
  const comment = req.body.comment;
  const post = req.body.post;
  CommentModel.create({
    comment: comment,
    post: post,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't post comment data!"));
});

app.get("/getcomment", (req, res) => {
  CommentModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err, "Can't fetch comment data!"));
});

app.post("/");
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
