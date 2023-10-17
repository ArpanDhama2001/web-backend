import express from "express";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(200).send("User saved successfully");
  } catch (err) {
    next(err);
  }
});

export default router;
