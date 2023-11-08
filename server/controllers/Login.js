const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const loginTest = require('../models/Login')
const dotenv = require("dotenv");
dotenv.config();


const SignupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const loginUser = new loginTest({
      username,
      email,
      password: hashPassword,
    });
    await loginUser.save();
    res.status(201).json({ message: "User created !" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginTest.findOne({ email: email });
    if (user && (await bcrypt.compare(password, user.password))) {
      {
        if(user.role==="Admin")
        {
          console.log(user.role); 
        }
        else
        {
          console.log(user.role)
        }
        res.status(200).json({ message: `Login Sucessfully!!`, userData: user });
      }
    } else {
      res.status(401).json({ error: "Login Failed!!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error in controller" });
  }
};

module.exports = { SignupUser, LoginUser };
