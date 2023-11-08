const { query } = require('express');
const Quantity = require ('../models/quantity');

const createQuantity = async(req,res,next) => {
    try {
        const {productId, value} = req.body;
        const quantity = new Quantity({
            productId,
            value
        })
        await quantity.save();
        res.status(201).json({quantity})
    }
    catch(error)
    {
        next();
    }
}

const getQuantityByProductId = async (req, res, next) => {
    try {
        const  {productId}  = await req.params;
        console.log(productId);
        const quantities = await Quantity.find({ productId: productId }).populate("productId");
        if (!quantities) {
            return res.status(404).json({ error: 'No quantities found for this productId.' });
        }
        res.status(201).json({ quantities });
    } catch (error) {
        console.error(error);
        next(error);
    }
}






module.exports = {createQuantity, getQuantityByProductId}