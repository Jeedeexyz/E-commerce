/* eslint-disable no-undef */
const mongoose = require("mongoose");

const product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  sizes: [
    {
      size: { type: String, required: false },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  sizeChart: {
    type: String,
    required: false,
  },
  fabric: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  fit: {
    type: String,
    required: false,
  },
  modelFit: {
    type: String,
    required: false,
  },
  modelSize: {
    type: String,
    required: false,
  },
  deliveryDetails: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  images: [
    {
      src: { type: String, required: true },
      alt: { type: String, required: true },
    },
  ],
  discount: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", product);
module.exports = Product;
