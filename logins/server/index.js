import express from "express";
import authRouter from "./routes/auth.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err.message));

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";
  res.status(statusCode).send(errorMessage);
});
