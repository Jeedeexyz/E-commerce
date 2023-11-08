/* eslint-disable no-undef */
const mongoose = require("mongoose");
const { isEmail, isIn } = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: isEmail,
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Minimum password length
  },
    role: {
      type: String,
      enum: ["Admin", "Manager", "Customer"],
      default: "Customer",
    },
});

module.exports = mongoose.model("loginSchema", userSchema);
