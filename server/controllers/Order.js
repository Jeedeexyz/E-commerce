/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const bcrypt = require("bcrypt");
const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { name, email, address, contactNumber, paymentMethod, totalPrice } =
      req.body;
    const newOrder = new Order({
      name,
      email,
      address,
      contactNumber,
      paymentMethod,
      totalPrice,
    });
    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

const getOrders = async (req, res) => {
  try {
    const response = await Order.find();
    res.status(201).send(response);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteOrder = async(req,res)=>{
  let {id} = req.query;
  try {
    const dataAgainstId = Order.findByIdAndDelete({_id:id});
    if(!dataAgainstId)
    {
      return res.status(404).json({ message: "DATA NOT FOUND" });
    }
    res.json({ message: "delete successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createOrder, getOrders, deleteOrder };
