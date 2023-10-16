const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err.message));

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
