const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models//userModel");

exports.createUser = async (req, res) => {
  try {
    let { firstName, lastName, email, password } = req.body;

    let checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.status(400).json({ error: "Email Already Exist" });
    }

    let hasPasword = await bcrypt.hashSync(password, 8);
    req.body.password = hasPasword;
    let createUser = await User.create(req.body);
    let token = await jwt.sign({ id: createUser._id }, "testingKey");
    return res.status(201).json({
      message: "User Created Successfully",
      data: createUser,
      token: token,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

exports.UserLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    let checkEmail = await User.findOne({ email });

    if (!checkEmail) {
      return res.status(400).json({ error: "User Not Exist" });
    }
    console.log(checkEmail);

    let newPassword = checkEmail.password;

    let validate = await bcrypt.compare(password, newPassword);

    console.log(validate);

    if (!validate) {
      return res.status(400).json({ error: "Email or Password are Incorrect" });
    }
    let token = await jwt.sign({ id: checkEmail._id }, "testingKey");

    return res.status(200).json({
      message: "User Logged InSuccessfully",
      data: checkEmail,
      token: token,
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
