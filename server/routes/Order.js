const express = require('express');
const router = express.Router();
const orderController = require('../controllers/Order');

router.post('/createOrder',orderController) //right now we have only one controller

module.exports = router