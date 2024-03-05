const express = require("express");
const Post = require("../models/post");

const router = express.Router();

//Post Method - New Post Creation
router.post("/post", async (req, res) => {
  const { title, content , author ,date } = req.body;
  const post = new Post({
    title, content , author ,date
  });
  try {
    const postToSave = await post.save();
    res.status(200).json({ postToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method - Exiting Posts Fetching
router.get("/getAll", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method - Fetching Particular Post
router.get("/getOne/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json({ id: post._id, name: post.title , content:post.content, author:post.author , date:post.date });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method - Updating Particular User
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Post.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method - Deleting Particular User
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id);
    res.send(`Post of ${post.author} , named as ${post.title} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
