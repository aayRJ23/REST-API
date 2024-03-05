const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

// Initialise the express app
const app = express();

require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

// MongoDB connecting steps
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

// this middleware allows us to accept the data in JSON format.
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("OK");
});

PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on the PORT ${PORT}`);
});
