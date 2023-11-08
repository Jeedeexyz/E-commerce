// const Usermiddleware = require('../Middleware/Usermiddleware.js');
const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.post('/createproduct',productController.addProduct);
router.get('/getallproducts',productController.getProducts);


module.exports = router;