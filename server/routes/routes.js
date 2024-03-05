const express = require("express");
const User = require("../models/user");

const router = express.Router();

//Post Method - New User Creation
router.post("/post", async (req, res) => {
  const { name, age } = req.body;
  const user = new User({
    name,
    age,
  });
  try {
    const userToSave = await user.save();
    res.status(200).json({ userToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method - Exiting Users Fetching
router.get("/getAll", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method - Fetching Particular User
router.get("/getOne/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ id: user._id, name: user.name });
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

    const result = await User.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete by ID Method - Deleting Particular User
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.send(`Document of ${user.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
