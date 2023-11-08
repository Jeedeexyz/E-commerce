const mongoose = require("mongoose");

const order = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
    paymentMethod:{
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
    productTitle:{
        type: String,
        required: true
    },
    productSize:{
        type: String,
        required: true
    },
    

})


const Order = mongoose.model("Order", order);
module.exports = Order;