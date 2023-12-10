const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./models/userModel");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/testing")
  .then(() => {
    console.log("mongodb connected Successullly");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hey Its Working");
});

// app.post("/createUser", async (req, res) => {
//   try {
//     let { firstName, lastName, email, password } = req.body;
//     let hasPasword = await bcrypt.hashSync(password, 8);
//     req.body.password = hasPasword;

//     let createUser = await User.create(req.body);
//     let token = await jwt.sign({ id: createUser._id }, "testingKey");
//     return res
//       .status(201)
//       .json({ message: "User Created", data: createUser, token: token });
//   } catch (err) {
//     return res.status(500).json(err.message);
//   }
// });

app.listen(4000, () => {
  console.log("server started on port : ", 4000);
});
